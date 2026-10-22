import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonDataService } from '../../core/services/salon-data.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  readonly salonData = inject(SalonDataService);
  readonly testimonials = this.salonData.testimonials;
}
