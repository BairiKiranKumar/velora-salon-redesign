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
  readonly showAllServices = signal<boolean>(false);
  readonly expandedServiceId = signal<string | null>(null);

  readonly categories = this.salonData.categories;

  readonly isSignatureOnly = computed(() => {
    return this.selectedCategory() === 'all' && !this.searchQuery().trim() && !this.showAllServices();
  });

  readonly displayedServices = computed(() => {
    const category = this.selectedCategory();
    const query = this.searchQuery().toLowerCase().trim();
    const showAll = this.showAllServices();

    // Default view: 6 signature services
    if (category === 'all' && !query && !showAll) {
      return this.salonData.services.filter(s => s.isSignature);
    }

    // Filtered by category or query
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
    if (id !== 'all') {
      this.showAllServices.set(true);
    }
  }

  toggleShowAll(): void {
    this.showAllServices.update(v => !v);
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
