import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-view4',
  templateUrl: './scroll-view4.component.html',
  styleUrl: './scroll-view4.component.css'
})
export class ScrollView4Component implements AfterViewInit {
  items = [
    { title: 'Item 1', description: 'Description for item 1', image: 'v1.png' },
    { title: 'Item 2', description: 'Description for item 2', image: 'v2.png' },
    { title: 'Item 3', description: 'Description for item 3', image: 'v3.png' },
    { title: 'Item 4', description: 'Description for item 4', image: 'v4.png' },
    { title: 'Item 5', description: 'Description for item 5', image: 'v5.png' },
    { title: 'Item 6', description: 'Description for item 6', image: 'v6.png' },
    { title: 'Item 7', description: 'Description for item 7', image: 'v7.png' },
    { title: 'Item 8', description: 'Description for item 8', image: 'v8.png' },
  ];

  currentImage = this.items[0].image;

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.onContainerScroll();
    });
  }

  onContainerScroll() {
    const scrollPosition = this.scrollContainer.nativeElement.scrollTop;
    const itemElements = this.scrollContainer.nativeElement.querySelectorAll('.scroll-item');

    itemElements.forEach((element: HTMLElement, index: number) => {
      if (element.offsetTop <= scrollPosition + window.innerHeight / 0.6 && element.offsetTop + element.clientHeight > scrollPosition + window.innerHeight / 1) {
        this.changeImage(index);
      }
    });
  }

  changeImage(index: number) {
    this.currentImage = this.items[index].image;
  }
}

