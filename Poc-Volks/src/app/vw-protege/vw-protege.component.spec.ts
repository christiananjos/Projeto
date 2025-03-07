import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwProtegeComponent } from './vw-protege.component';

describe('VwProtegeComponent', () => {
  let component: VwProtegeComponent;
  let fixture: ComponentFixture<VwProtegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VwProtegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VwProtegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
