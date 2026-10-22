import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalonDataService } from '../../core/services/salon-data.service';
import { BookingService } from '../../core/services/booking.service';
import { SalonService, ServiceCategoryId } from '../../core/models/service.model';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {
  readonly salonData = inject(SalonDataService);
  readonly bookingService = inject(BookingService);

  readonly selectedCategory = signal<ServiceCategoryId>('all');
  readonly searchQuery = signal<string>('');
  readonly expandedServiceId = signal<string | null>(null);

  readonly categories = this.salonData.categories;

  readonly filteredServices = computed(() => {
    const category = this.selectedCategory();
    const query = this.searchQuery().toLowerCase().trim();

    return this.salonData.services.filter(service => {
      const matchesCategory = category === 'all' || service.category === category;
      const matchesQuery = !query || 
        service.name.toLowerCase().includes(query) ||
        service.shortDescription.toLowerCase().includes(query) ||
        (service.benefits && service.benefits.some(b => b.toLowerCase().includes(query)));

      return matchesCategory && matchesQuery;
    });
  });

  selectCategory(id: ServiceCategoryId): void {
    this.selectedCategory.set(id);
  }

  toggleService(service: SalonService, event: Event): void {
    event.stopPropagation();
    this.bookingService.toggleService(service);
  }

  toggleExpand(serviceId: string): void {
    this.expandedServiceId.update(curr => curr === serviceId ? null : serviceId);
  }

  isServiceSelected(serviceId: string): boolean {
    return this.bookingService.selectedServices().some(s => s.id === serviceId);
  }

  openBookingWithService(service: SalonService, event: Event): void {
    event.stopPropagation();
    this.bookingService.openDrawer(service);
  }

  openBookingDrawer(): void {
    this.bookingService.openDrawer();
  }
}
