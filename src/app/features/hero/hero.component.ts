import { Component, inject, AfterViewInit, OnDestroy, ElementRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BookingService } from '../../core/services/booking.service';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly bookingService = inject(BookingService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject(ElementRef);
  private ctx?: gsap.Context;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        opacity: 0,
        y: -15,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2
      });

      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.35
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.55
      });

      gsap.from('.hero-cta-group', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.7
      });

      gsap.from('.hero-practical-strip', {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.85
      });

      gsap.from('.portrait-card', {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4
      });
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }

  openBooking(): void {
    this.bookingService.openDrawer();
  }
}
