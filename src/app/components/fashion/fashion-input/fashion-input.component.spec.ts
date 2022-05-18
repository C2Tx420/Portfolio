import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionInputComponent } from './fashion-input.component';

describe('FashionInputComponent', () => {
  let component: FashionInputComponent;
  let fixture: ComponentFixture<FashionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
