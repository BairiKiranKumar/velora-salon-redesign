import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonDataService } from '../../core/services/salon-data.service';
import { BookingService } from '../../core/services/booking.service';
import { MasterStylist } from '../../core/models/stylist.model';

@Component({
  selector: 'app-stylists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.scss']
})
export class StylistsComponent {
  readonly salonData = inject(SalonDataService);
  readonly bookingService = inject(BookingService);

  readonly stylists = this.salonData.stylists;

  bookWithStylist(stylist: MasterStylist): void {
    this.bookingService.selectStylist(stylist);
    this.bookingService.openDrawer();
  }
}
