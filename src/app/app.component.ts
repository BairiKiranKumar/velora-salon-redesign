import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { BrandStoryComponent } from './features/brand-story/brand-story.component';
import { CollectionsComponent } from './features/collections/collections.component';
import { StylistsComponent } from './features/stylists/stylists.component';
import { TransformationsComponent } from './features/transformations/transformations.component';
import { PackagesComponent } from './features/packages/packages.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { BookingWizardComponent } from './features/booking/booking-wizard.component';
import { ConciergeComponent } from './features/concierge/concierge.component';
import { FooterComponent } from './features/footer/footer.component';
import { BookingService } from './core/services/booking.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    BrandStoryComponent,
    CollectionsComponent,
    StylistsComponent,
    TransformationsComponent,
    PackagesComponent,
    ReviewsComponent,
    BookingWizardComponent,
    ConciergeComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly bookingService = inject(BookingService);

  closeDrawer(): void {
    this.bookingService.closeDrawer();
  }
}
