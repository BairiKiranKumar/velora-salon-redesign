# AWS Deployment Plan: VELORA Studio

**Author:** DevOps & Cloud Solutions Engineer (`devops-engineer` / `cloud-architect`)  
**Project:** VELORA Studio – Angular 19 Production Single Page Application  
**Authorization Status:** PENDING EXPLICIT APPROVAL (Execution locked per AGENTS.md rule 3)  
**Date:** October 2026  

---

## 1. Architecture Overview

VELORA Studio is a client-side rendered (CSR) Angular 19 single-page application compiled into optimized static HTML, CSS, JavaScript, and asset bundles. The target AWS infrastructure leverages:

1. **Amazon S3 (Simple Storage Service):** Private static storage bucket configured for secure static asset hosting.
2. **Amazon CloudFront:** Global Content Delivery Network (CDN) with edge caching, HTTP/2 & HTTP/3 support, and automated Brotli/Gzip compression.
3. **AWS Origin Access Control (OAC):** Secures S3 bucket access so objects are only reachable via CloudFront edge locations, blocking direct public S3 bucket access.
4. **AWS Certificate Manager (ACM):** Managed SSL/TLS X.509 certificate providing automated renewal and HTTPS termination at the edge.
5. **Amazon Route 53:** Global DNS routing with Alias A and AAAA records pointing directly to the CloudFront distribution.

---

## 2. Infrastructure Specification & CloudFormation / Terraform Snippets

### A. S3 Bucket Policy (OAC Locked)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::velora-studio-portfolio/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

### B. CloudFront SPA Fallback Custom Error Response
Because Angular uses client-side routing (`provideRouter`), requests for non-root paths (e.g. `/services`, `/booking`) must resolve to `/index.html` with an HTTP 200 status code:

| HTTP Error Code | Error Caching Min TTL | Response Page Path | HTTP Response Code |
| :--- | :--- | :--- | :--- |
| **403: Forbidden** | 10 seconds | `/index.html` | **200: OK** |
| **404: Not Found** | 10 seconds | `/index.html` | **200: OK** |

### C. Cache & Compression Behaviors
- **Static Asset Caching (`/assets/*`, `/*.js`, `/*.css`):** Cache-Control `public, max-age=31536000, immutable` (Angular appends content hashes to compiled bundles).
- **Application Entrypoint (`/index.html`):** Cache-Control `no-cache, no-store, must-revalidate` (guarantees immediate visibility of new releases without CDN lag).

---

## 3. Production Deployment Runbook

### Step 1: Local / CI Production Build
```powershell
npm run build -- --configuration production
# Output artifact: dist/velora-salon/browser
```

### Step 2: S3 Synchronization
```powershell
# Sync hashed JS, CSS, and SVG assets with 1-year cache header
aws s3 sync dist/velora-salon/browser s3://velora-studio-portfolio `
  --exclude "index.html" `
  --cache-control "public, max-age=31536000, immutable" `
  --delete

# Sync index.html with no-cache header
aws s3 cp dist/velora-salon/browser/index.html s3://velora-studio-portfolio/index.html `
  --cache-control "no-cache, no-store, must-revalidate"
```

### Step 3: CloudFront Cache Invalidation
```powershell
aws cloudfront create-invalidation `
  --distribution-id <DISTRIBUTION_ID> `
  --paths "/index.html"
```

---

## 4. Rollback Strategy
1. **S3 Object Versioning:** Enabled on bucket `velora-studio-portfolio` to preserve previous deployment bundle states.
2. **Instant Rollback:** In the event of an unexpected regression, sync previous release prefix or update Route 53 weight/CloudFront origin to previous distribution.
3. **Execution Gate:** No AWS commands will be executed until explicitly authorized by Kiran.
