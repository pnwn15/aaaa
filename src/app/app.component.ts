import { Component,ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ]
})
export class AppComponent {
  title = 'my-angular-tailwind';
item: any;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Accessing the carousel element
    const carouselElement = this.elementRef.nativeElement.querySelector('#controls-carousel');

    // Creating carousel items
    for (let i = 0; i < 5; i++) {
      const carouselItem = this.renderer.createElement('div');
      this.renderer.addClass(carouselItem, 'hidden');
      this.renderer.setAttribute(carouselItem, 'data-carousel-item', '');
      carouselElement.appendChild(carouselItem);
    }
  }
  carouselItems: { imageSrc: string }[] = [];
  ngOnInit(): void {
    // Initialize carousel items with image sources
    this.carouselItems = [
      { imageSrc: '/assets/sheep.png' },
      { imageSrc: '/assets/sheep.png' },
      { imageSrc: '/assets/sheep.png' },
      { imageSrc: '/assets/sheep.png' },
      { imageSrc: '/assets/sheep.png' }
    ];
  }
}
