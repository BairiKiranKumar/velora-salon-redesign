import { Component, inject, signal, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../core/services/booking.service';
import { SalonDataService } from '../../core/services/salon-data.service';
import { SalonService, ServiceCategoryId } from '../../core/models/service.model';
import { MasterStylist } from '../../core/models/stylist.model';

@Component({
  selector: 'app-booking-wizard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './booking-wizard.component.html',
  styleUrls: ['./booking-wizard.component.scss']
})
export class BookingWizardComponent {
  @Input() isDrawerMode: boolean = false;

  readonly bookingService = inject(BookingService);
  readonly salonData = inject(SalonDataService);
  private readonly fb = inject(FormBuilder);

  readonly activeCategory = signal<ServiceCategoryId>('all');
  readonly serviceSearch = signal<string>('');
  readonly isSubmitting = signal<boolean>(false);
  readonly showDemoModal = signal<boolean>(false);

  readonly clientForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    email: ['', [Validators.required, Validators.email]],
    notes: [''],
    agreeToDemo: [true, Validators.requiredTrue]
  });

  // Next 14 Available Days
  readonly availableDates = computed(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const isSunday = d.getDay() === 0;
      dates.push({
        iso: this.formatDate(d),
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: d.getDate(),
        monthName: d.toLocaleDateString('en-US', { month: 'short' }),
        isLimitedHours: isSunday
      });
    }
    return dates;
  });

  readonly filteredServices = computed(() => {
    const cat = this.activeCategory();
    const query = this.serviceSearch().toLowerCase().trim();

    return this.salonData.services.filter(s => {
      const matchesCat = cat === 'all' || s.category === cat;
      const matchesQuery = !query || s.name.toLowerCase().includes(query) || s.shortDescription.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  });

  constructor() {
    // Populate form if booking service already has customer details
    const curr = this.bookingService.customerDetails();
    if (curr.fullName) {
      this.clientForm.patchValue(curr);
    }
  }

  setCategory(cat: ServiceCategoryId): void {
    this.activeCategory.set(cat);
  }

  isServiceSelected(serviceId: string): boolean {
    return this.bookingService.selectedServices().some(s => s.id === serviceId);
  }

  toggleService(service: SalonService): void {
    this.bookingService.toggleService(service);
  }

  removeService(serviceId: string): void {
    this.bookingService.removeService(serviceId);
  }

  selectStylist(stylist: MasterStylist | null): void {
    this.bookingService.selectStylist(stylist);
  }

  isStylistSelected(stylistId: string | null): boolean {
    const curr = this.bookingService.selectedStylist();
    if (stylistId === null) return curr === null;
    return curr?.id === stylistId;
  }

  selectDate(dateIso: string): void {
    this.bookingService.setDate(dateIso);
  }

  selectTimeSlot(time: string): void {
    this.bookingService.setTimeSlot(time);
  }

  goToStep(step: number): void {
    if (step === 2 && this.bookingService.serviceCount() === 0) return;
    if (step === 3 && !this.bookingService.selectedDate()) return;
    if (step === 4 && this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }

    if (this.bookingService.currentStep() === 3 && step === 4) {
      this.bookingService.updateCustomerDetails(this.clientForm.value);
    }

    this.bookingService.setStep(step);
  }

  proceedToStep2(): void {
    if (this.bookingService.serviceCount() > 0) {
      this.bookingService.setStep(2);
    }
  }

  proceedToStep3(): void {
    if (this.bookingService.selectedDate()) {
      if (!this.bookingService.selectedTimeSlot()) {
        this.bookingService.setTimeSlot('11:15 AM');
      }
      this.bookingService.setStep(3);
    }
  }

  proceedToStep4(): void {
    if (this.clientForm.valid) {
      this.bookingService.updateCustomerDetails(this.clientForm.value);
      this.bookingService.setStep(4);
    } else {
      this.clientForm.markAllAsTouched();
    }
  }

  confirmBooking(): void {
    if (this.clientForm.valid && this.bookingService.serviceCount() > 0) {
      this.isSubmitting.set(true);
      setTimeout(() => {
        this.bookingService.confirmDemoBooking();
        this.isSubmitting.set(false);
        this.showDemoModal.set(true);
      }, 600);
    }
  }

  closeDemoModal(): void {
    this.showDemoModal.set(false);
    this.bookingService.resetBooking();
    if (this.isDrawerMode) {
      this.bookingService.closeDrawer();
    }
  }

  downloadCalendar(): void {
    this.bookingService.generateCalendarIcs();
  }

  getServiceNames(services: SalonService[]): string {
    if (!services || services.length === 0) return '';
    return services.map(s => s.name).join(', ');
  }

  closeDrawer(): void {
    this.bookingService.closeDrawer();
  }

  private formatDate(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
}
