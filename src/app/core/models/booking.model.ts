import { SalonService } from './service.model';
import { MasterStylist } from './stylist.model';

export interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  notes: string;
  agreedToPolicy: boolean;
}

export interface BookingTimeSlot {
  time: string;
  period: 'morning' | 'afternoon' | 'evening';
  available: boolean;
}

export interface DemoBookingConfirmation {
  referenceId: string;
  timestamp: string;
  services: SalonService[];
  stylist: MasterStylist | null;
  appointmentDate: string;
  appointmentTime: string;
  customer: CustomerDetails;
  totalPrice: number;
  totalDurationMinutes: number;
  formattedDuration: string;
  isDemoEnvironment: true;
}
