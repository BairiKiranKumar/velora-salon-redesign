import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CraftPillar {
  number: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-brand-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-story.component.html',
  styleUrls: ['./brand-story.component.scss']
})
export class BrandStoryComponent {
  readonly pillars: CraftPillar[] = [
    {
      number: '01',
      title: 'Bespoke Facial Architecture',
      description: 'Every coiffure and treatment begins with an unhurried 10-minute facial geometry and scalp diagnostic consultation.',
      icon: 'sparkles'
    },
    {
      number: '02',
      title: 'Clinical & Botanical Purity',
      description: 'Formulations strictly free from formaldehyde, parabens, and synthetic ammonia; enriched with French botanicals.',
      icon: 'leaf'
    },
    {
      number: '03',
      title: 'Master Resident Artisans',
      description: 'Our stylists boast an average of 10+ years international atelier experience and continuous European masterclasses.',
      icon: 'gem'
    },
    {
      number: '04',
      title: 'Tranquil Sensory Haven',
      description: 'Acoustic dampening, ambient champagne lighting, private bridal chambers, and custom aromatherapy infusions.',
      icon: 'shield'
    }
  ];
}
