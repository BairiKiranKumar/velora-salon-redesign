export interface VerifiedTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  city: string;
  avatarUrl: string;
  rating: number;
  quote: string;
  verifiedTreatment: string;
  date: string;
  isConceptSample?: boolean;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeTag: string;
  afterTag: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  imageUrl: string;
  durationText: string;
  treatmentName: string;
  stylistName: string;
  isPairedComparison?: boolean;
}
