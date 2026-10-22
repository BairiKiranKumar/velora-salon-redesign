import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonDataService, SalonFaq } from '../../core/services/salon-data.service';

@Component({
  selector: 'app-concierge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concierge.component.html',
  styleUrls: ['./concierge.component.scss']
})
export class ConciergeComponent {
  readonly salonData = inject(SalonDataService);
  readonly faqs = this.salonData.faqs;

  readonly openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.openFaqIndex.update(curr => curr === index ? null : index);
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex() === index;
  }
}
