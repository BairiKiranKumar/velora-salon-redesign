import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonDataService } from '../../core/services/salon-data.service';
import { BookingService } from '../../core/services/booking.service';
import { MembershipPackage } from '../../core/models/service.model';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  readonly salonData = inject(SalonDataService);
  readonly bookingService = inject(BookingService);

  readonly packages = this.salonData.packages;

  selectPackage(pkg: MembershipPackage): void {
    this.bookingService.openDrawer();
  }
}
