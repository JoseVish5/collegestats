import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollView4Component } from './scroll-view4.component';

describe('ScrollView4Component', () => {
  let component: ScrollView4Component;
  let fixture: ComponentFixture<ScrollView4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollView4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollView4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
