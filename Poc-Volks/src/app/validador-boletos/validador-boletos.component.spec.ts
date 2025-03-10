import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorBoletosComponent } from './validador-boletos.component';

describe('ValidadorBoletosComponent', () => {
  let component: ValidadorBoletosComponent;
  let fixture: ComponentFixture<ValidadorBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidadorBoletosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidadorBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
