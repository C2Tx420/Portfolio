import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionButtonComponent } from './fashion-button.component';

describe('FashionButtonComponent', () => {
  let component: FashionButtonComponent;
  let fixture: ComponentFixture<FashionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
