export type ServiceCategoryId = 
  | 'all'
  | 'hair'
  | 'color'
  | 'skin'
  | 'bridal'
  | 'men'
  | 'spa';

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: string;
  tagline: string;
  icon: string;
  count?: number;
}

export interface SalonService {
  id: string;
  name: string;
  category: ServiceCategoryId;
  price: number;
  durationMinutes: number;
  shortDescription: string;
  detailedDescription?: string;
  benefits?: string[];
  isPopular?: boolean;
  isSignature?: boolean;
}

export interface MembershipPackage {
  id: string;
  name: string;
  tier: 'Privilege' | 'Atelier Reserve' | 'Haute Bespoke';
  monthlyPrice: number;
  savingsPercentage: number;
  description: string;
  features: string[];
  isBestValue?: boolean;
  accentBadge?: string;
}
