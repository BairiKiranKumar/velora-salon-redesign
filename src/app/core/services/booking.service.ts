import { Injectable, computed, signal } from '@angular/core';
import { SalonService } from '../models/service.model';
import { MasterStylist } from '../models/stylist.model';
import { CustomerDetails, BookingTimeSlot, DemoBookingConfirmation } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  // Reactive Signals State
  readonly selectedServices = signal<SalonService[]>([]);
  readonly selectedStylist = signal<MasterStylist | null>(null);
  readonly selectedDate = signal<string>('');
  readonly selectedTimeSlot = signal<string>('');
  readonly currentStep = signal<number>(1);
  readonly isDrawerOpen = signal<boolean>(false);
  readonly demoConfirmation = signal<DemoBookingConfirmation | null>(null);

  readonly customerDetails = signal<CustomerDetails>({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    agreedToPolicy: true
  });

  // Computed Derived Signals
  readonly serviceCount = computed(() => this.selectedServices().length);

  readonly totalPrice = computed(() => {
    return this.selectedServices().reduce((sum, s) => sum + s.price, 0);
  });

  readonly totalDurationMinutes = computed(() => {
    return this.selectedServices().reduce((sum, s) => sum + s.durationMinutes, 0);
  });

  readonly formattedDuration = computed(() => {
    const mins = this.totalDurationMinutes();
    if (mins === 0) return '0 mins';
    const hours = Math.floor(mins / 60);
    const rem = mins % 60;
    if (hours === 0) return `${rem} mins`;
    if (rem === 0) return `${hours} hr${hours > 1 ? 's' : ''}`;
    return `${hours} hr${hours > 1 ? 's' : ''} ${rem} mins`;
  });

  readonly isServiceSelected = (serviceId: string) => {
    return computed(() => this.selectedServices().some(s => s.id === serviceId));
  };

  // Pre-configured slots for selection
  readonly availableTimeSlots: BookingTimeSlot[] = [
    { time: '10:00 AM', period: 'morning', available: true },
    { time: '11:15 AM', period: 'morning', available: true },
    { time: '12:30 PM', period: 'afternoon', available: true },
    { time: '02:00 PM', period: 'afternoon', available: true },
    { time: '03:30 PM', period: 'afternoon', available: true },
    { time: '05:00 PM', period: 'evening', available: true },
    { time: '06:15 PM', period: 'evening', available: true },
    { time: '07:30 PM', period: 'evening', available: true }
  ];

  constructor() {
    // Set default initial date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.selectedDate.set(this.formatDateForInput(tomorrow));
  }

  // State Mutators
  toggleService(service: SalonService): void {
    const current = this.selectedServices();
    const index = current.findIndex(s => s.id === service.id);
    if (index >= 0) {
      this.selectedServices.set(current.filter(s => s.id !== service.id));
    } else {
      this.selectedServices.set([...current, service]);
    }
  }

  addService(service: SalonService): void {
    if (!this.selectedServices().some(s => s.id === service.id)) {
      this.selectedServices.update(list => [...list, service]);
    }
  }

  removeService(serviceId: string): void {
    this.selectedServices.update(list => list.filter(s => s.id !== serviceId));
  }

  clearServices(): void {
    this.selectedServices.set([]);
  }

  selectStylist(stylist: MasterStylist | null): void {
    this.selectedStylist.set(stylist);
  }

  setDate(date: string): void {
    this.selectedDate.set(date);
  }

  setTimeSlot(slot: string): void {
    this.selectedTimeSlot.set(slot);
  }

  setStep(step: number): void {
    if (step >= 1 && step <= 4) {
      this.currentStep.set(step);
    }
  }

  nextStep(): void {
    if (this.currentStep() < 4) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  openDrawer(targetService?: SalonService): void {
    if (targetService) {
      this.addService(targetService);
    }
    this.isDrawerOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeDrawer(): void {
    this.isDrawerOpen.set(false);
    document.body.style.overflow = '';
  }

  updateCustomerDetails(details: Partial<CustomerDetails>): void {
    this.customerDetails.update(curr => ({ ...curr, ...details }));
  }

  confirmDemoBooking(): DemoBookingConfirmation {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const reference = `VEL-${randomSuffix}-BLR`;

    const confirmation: DemoBookingConfirmation = {
      referenceId: reference,
      timestamp: new Date().toISOString(),
      services: [...this.selectedServices()],
      stylist: this.selectedStylist(),
      appointmentDate: this.selectedDate(),
      appointmentTime: this.selectedTimeSlot() || '11:15 AM',
      customer: { ...this.customerDetails() },
      totalPrice: this.totalPrice(),
      totalDurationMinutes: this.totalDurationMinutes(),
      formattedDuration: this.formattedDuration(),
      isDemoEnvironment: true
    };

    this.demoConfirmation.set(confirmation);
    return confirmation;
  }

  resetBooking(): void {
    this.selectedServices.set([]);
    this.selectedStylist.set(null);
    this.selectedTimeSlot.set('');
    this.currentStep.set(1);
    this.demoConfirmation.set(null);
  }

  generateCalendarIcs(): void {
    const conf = this.demoConfirmation();
    if (!conf) return;

    const summary = `VELORA Studio Appointment (${conf.referenceId})`;
    const description = `Services: ${conf.services.map(s => s.name).join(', ')}\\n` +
      `Stylist: ${conf.stylist ? conf.stylist.name : 'Atelier Master Specialist'}\\n` +
      `Estimated Investment: INR ${conf.totalPrice}\\n` +
      `[Notice: Demo appointment created on VELORA Studio portfolio]`;
    const location = `VELORA Studio, Boulevard Avenue, Old Town, Bhubaneswar`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//VELORA Studio//Appointment Demo//EN',
      'BEGIN:VEVENT',
      `UID:${conf.referenceId}@velorastudio.com`,
      `DTSTAMP:${this.formatDateForIcs(new Date())}`,
      `DTSTART:${this.formatDateForIcs(new Date(conf.appointmentDate + 'T10:00:00'))}`,
      `DTEND:${this.formatDateForIcs(new Date(conf.appointmentDate + 'T12:00:00'))}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `velora-appointment-${conf.referenceId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private formatDateForInput(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  private formatDateForIcs(date: Date): string {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }
}
