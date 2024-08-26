import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollView2Component } from './scroll-view2.component';

describe('ScrollView2Component', () => {
  let component: ScrollView2Component;
  let fixture: ComponentFixture<ScrollView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollView2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
