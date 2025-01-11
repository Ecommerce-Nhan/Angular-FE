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

}
