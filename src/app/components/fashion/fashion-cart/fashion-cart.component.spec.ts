import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionCartComponent } from './fashion-cart.component';

describe('FashionCartComponent', () => {
  let component: FashionCartComponent;
  let fixture: ComponentFixture<FashionCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
