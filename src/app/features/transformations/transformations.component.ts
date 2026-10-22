import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonDataService } from '../../core/services/salon-data.service';
import { BookingService } from '../../core/services/booking.service';

@Component({
  selector: 'app-transformations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transformations.component.html',
  styleUrls: ['./transformations.component.scss']
})
export class TransformationsComponent {
  readonly salonData = inject(SalonDataService);
  readonly bookingService = inject(BookingService);

  readonly transformations = this.salonData.transformations;

  onImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = 'images/hero-portrait.jpg';
    }
  }

  openBooking(): void {
    this.bookingService.openDrawer();
  }
}
