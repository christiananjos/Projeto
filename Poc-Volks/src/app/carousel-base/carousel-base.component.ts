import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-base',
  standalone: false,
  templateUrl: './carousel-base.component.html',
  styleUrl: './carousel-base.component.css'
})
export class CarouselBaseComponent {
  images: string[] = [
    'https://www.basketball-loewen.de/wp-content/uploads/2022/12/VWFS_LOGO-980-e1671006285144.jpg',
    'https://www.basketball-loewen.de/wp-content/uploads/2022/12/VWFS_LOGO-980-e1671006285144.jpg',
    'https://www.basketball-loewen.de/wp-content/uploads/2022/12/VWFS_LOGO-980-e1671006285144.jpg'
  ];
}
