import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('slideContainer') slideContainer!: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

  fashionImage: string = '/assets/images/products/5.jpg';
  circleColor: string = 'rgb(101 104 99)';
  commonInfo = {
    name: 'Trần Thanh Nhân',
    description: 'Software Engineer',
  };
  slides = [
    '/assets/images/slideshows/1.jpeg',
    '/assets/images/slideshows/2.jpeg',
    '/assets/images/slideshows/3.jpeg',
    '/assets/images/slideshows/4.jpeg',
    '/assets/images/slideshows/5.jpeg',
  ];
  products = [
    { Picture: '/assets/images/products/5.jpg' },
    { Picture: '/assets/images/products/40.jpg' },
    { Picture: '/assets/images/products/6.jpg' },
  ];

  ngOnInit(): void {
    this.animateNumbers();
  }
  ngAfterViewInit(): void {
  }

  navigateToStore(): void {
    this.router.navigate(['/home/store']);
  }
  moveNext(): void {
    const slides = this.slideContainer.nativeElement.querySelectorAll('.item');
    if (slides.length) {
      this.slideContainer.nativeElement.appendChild(slides[0]);
    }
  }

  movePrev(): void {
    const slides = this.slideContainer.nativeElement.querySelectorAll('.item');
    if (slides.length) {
      this.slideContainer.nativeElement.prepend(slides[slides.length - 1]);
    }
  }
  animateNumbers(): void {
    const cnNumbers = document.querySelectorAll('.cn_num');
    cnNumbers.forEach((el) => {
      let counter = 0;
      const target = parseInt(el.textContent || '0', 10);
      const interval = setInterval(() => {
        counter += Math.ceil(target / 100);
        el.textContent = counter.toString();
        if (counter >= target) clearInterval(interval);
      }, 40);
    });
  }

  onImageClick(imageSrc: string): void {
    this.fashionImage = imageSrc;
    this.changeCircleColor(imageSrc);
  }

  changeCircleColor(imageSrc: string): void {
    const colorMapping = {
      'product1.jpg': 'rgb(101 104 99)',
      'product2.jpg': '#968f8f',
      'product3.jpg': 'rgb(132 180 202)',
    };

    const imageName = imageSrc.split('/').pop();
    // this.circleColor = colorMapping[imageName] || this.circleColor;
  }
}
