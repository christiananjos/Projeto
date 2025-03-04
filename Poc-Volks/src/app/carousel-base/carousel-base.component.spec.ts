import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBaseComponent } from './carousel-base.component';

describe('CarouselBaseComponent', () => {
  let component: CarouselBaseComponent;
  let fixture: ComponentFixture<CarouselBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
