import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-view2',
  templateUrl: './scroll-view2.component.html',
  styleUrl: './scroll-view2.component.css'
})
export class ScrollView2Component implements AfterViewInit {
  items = [
    { title: 'Item 1', description: 'Description for item 1', image: 'a1.png' },
    { title: 'Item 2', description: 'Description for item 2', image: 'a2.png' },
    { title: 'Item 3', description: 'Description for item 3', image: 'a3.png' },
    { title: 'Item 4', description: 'Description for item 4', image: 'a4.png' },
    { title: 'Item 5', description: 'Description for item 5', image: 'a5.png' },
    { title: 'Item 6', description: 'Description for item 6', image: 'a6.png' },
    { title: 'Item 7', description: 'Description for item 7', image: 'a7.png' },
    { title: 'Item 8', description: 'Description for item 8', image: 'a8.png' },
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
      if (element.offsetTop <= scrollPosition + window.innerHeight / 0.8 && element.offsetTop + element.clientHeight > scrollPosition + window.innerHeight / 2) {
        this.changeImage(index);
      }
    });
  }

  changeImage(index: number) {
    this.currentImage = this.items[index].image;
  }
}

