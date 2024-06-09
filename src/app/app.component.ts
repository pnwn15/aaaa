import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from 'flowbite';
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ]
})
export class AppComponent {
  title = 'my-angular-tailwind';
  currentSlide = 0;
  slides = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];
products: any;
  constructor() { }

  ngOnInit(): void {
    this.showSlide(this.currentSlide);
    setInterval(() => {
      this.nextSlide();
    }, 5000); // เปลี่ยนภาพทุก 5 วินาที
  }

  showSlide(index: number) {
    const items = document.querySelectorAll('.carousel-item') as NodeListOf<HTMLElement>;
    items.forEach(item => {
      item.classList.remove('opacity-100');
      item.classList.add('opacity-0');
    });
    items[index].classList.remove('opacity-0');
    items[index].classList.add('opacity-100');
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(this.currentSlide);
  }

  
}
