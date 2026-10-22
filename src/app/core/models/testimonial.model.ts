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
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeTag: string;
  afterTag: string;
  stylistName: string;
  imageUrl: string;
}
