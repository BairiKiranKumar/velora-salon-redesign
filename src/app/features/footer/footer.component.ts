import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../core/services/booking.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly bookingService = inject(BookingService);
  readonly currentYear = new Date().getFullYear();

  newsletterSubscribed: boolean = false;

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    this.newsletterSubscribed = true;
  }

  openBooking(): void {
    this.bookingService.openDrawer();
  }
}
