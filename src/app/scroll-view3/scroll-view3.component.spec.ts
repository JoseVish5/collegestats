import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollView3Component } from './scroll-view3.component';

describe('ScrollView3Component', () => {
  let component: ScrollView3Component;
  let fixture: ComponentFixture<ScrollView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollView3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
