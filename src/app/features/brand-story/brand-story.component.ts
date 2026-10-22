import { Component, AfterViewInit, OnDestroy, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';

interface CraftPillar {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-brand-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-story.component.html',
  styleUrls: ['./brand-story.component.scss']
})
export class BrandStoryComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject(ElementRef);
  private ctx?: gsap.Context;

  readonly pillars: CraftPillar[] = [
    {
      number: '01',
      title: 'Dedicated Consultation',
      description: 'We reserve 10 unhurried minutes before every appointment to listen to your routine, assess hair porosity, and tailor every cut to your natural texture.'
    },
    {
      number: '02',
      title: 'Hospital-Grade Hygiene',
      description: 'UV-C sterilization for all metal instruments between guests, individually sealed tool trays, and fresh laundered linens for every client.'
    },
    {
      number: '03',
      title: 'Heritage & Modern Artistry',
      description: 'From authentic Odisha bridal handloom draping to effortless lived-in balayage, we blend regional tradition with contemporary salon craft.'
    },
    {
      number: '04',
      title: 'Warm Bhubaneswar Hospitality',
      description: 'Warm herbal teas, gentle acoustic soundscapes, and private consultation bays designed so you can unwind completely.'
    }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.ctx = gsap.context(() => {
      gsap.from('.pillar-item', {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.1
      });
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
