import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBaseComponent } from './footer-base.component';

describe('FooterBaseComponent', () => {
  let component: FooterBaseComponent;
  let fixture: ComponentFixture<FooterBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
