import { ComponentFixture, TestBed } from '@angular/core/testing';

import { paymentTypeMethodssComponent } from './payment-types.component';

describe('paymentTypeMethodssComponent', () => {
  let component: paymentTypeMethodssComponent;
  let fixture: ComponentFixture<paymentTypeMethodssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ paymentTypeMethodssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(paymentTypeMethodssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
