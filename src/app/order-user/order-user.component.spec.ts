import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUserComponent } from './order-user.component';

describe('OrderUserComponent', () => {
  let component: OrderUserComponent;
  let fixture: ComponentFixture<OrderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
