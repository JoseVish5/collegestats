import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-view',
  templateUrl: './scroll-view.component.html',
  styleUrls: ['./scroll-view.component.css']
})
export class ScrollViewComponent implements AfterViewInit {
  items = [
    { title: 'The share of male students across various engineering courses in 2013', description1: '*scroll here', image: 'e1.png' },
    { title: '', description: 'In 2013, male students dominated the traditional engineering courses, especially mechanical engineering, for which about 96% of the students enrolled were male. They also enrolled in higher shares for the civil and aeronautical engineering courses.', image: 'e2.png' },
    { title: '', description: 'Within these core engineering disciplines, women only came close to matching their numbers in the computer engineering and information technology, where they formed nearly half the population.', image: 'e3.png' },
    { title: 'The share of male students across various engineering courses in 2022', description: '', image: 'e4.png' },
    { title: '', description: 'Male students continued to dominate the share of those enrolled in mechanical engineering, but showed a slight decline of 3% points by 2022. The absolute number of students enrolling in the field dropped significantly though, almost halving from over 10 lakh in 2016 to 5.4 lakh in 2022.', image: 'e5.png' },
    { title: '', description: 'Along with an incline of 11% points since 2013, there was a drastic increase in the number of male students enrolling in computer engineering courses, from about 3.5 lakh in 2013 to 8.25 lakh in 2022.', image: 'e6.png' },
    { title: '', description: 'Male students are also dominating in newly introduced courses such as data science, where they made up 78.3% of the total number of students enrolled, and Artifical Intelligence, where they formed 70%.', image: 'e7.png' },
    { title: 'The share of female students across various engineering courses in 2013', description: '', image: 'e8.png' },
    { title: '', description: 'In 2013, large numbers of female students took up traditional courses such as electronics engineering, computer engineering, and information technology (IT). However, the only course in which they managed to outnumber men was architecture, where they formed a 51% share of students enrolments.', image: 'e9.png' },
    { title: '', description: 'They lacked a presence in courses such as marine engineering and mining engineering, where they formed less than two percent of the student enrolments. Mechanical engineering was a major course from which they were primarily absent.', image: 'e10.png' },
    { title: 'The share of female students across various engineering courses in 2022', description: '', image: 'e11.png' },
    { title: '', description: 'Despite continuing to enroll for core courses such as computer engineering and information technology, the presence of female students in these disciplines dropped by about 10% points each, as the decade progressed.', image: 'e12.png' },
    { title: '', description: 'However, with a possible sway in societal attitudes and the introduction of new courses, female students started enrolling in disciplines where they were previously had little presence. In mining engineering, the share of female students was 1.2% in 2013 and increased to 8% in 2022. Similarly, in marine engineering, the share of female students jumped from 1.5% to 6.4%', image: 'e13.png' },
    { title: '', description: 'The share of female students also increased significantly in mechanical engineering and civil engineering, from 4.3% to 7.6% and 18.2% to 23%, respectively, in the same period.', image: 'e14.png' },
    { title: '', description: 'Female students have increasingly opted for food technology over the past decade, as their share in the discipline has increased by 12% points, the highest jump in female enrolments over the past ten years.', image: 'e15.png' },
    { title: '', description: 'Women have also started showing interest in new courses such as Artificial Intelligence, where they form 30% of student enrolments. In fact, in 2022 they form a majority of the students who have enrolled for the newly introduced aircraft maintenance engineering course.', image: 'e16.png' },
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