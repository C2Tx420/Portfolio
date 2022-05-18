import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionHeaderComponent } from './fashion-header.component';

describe('FashionHeaderComponent', () => {
  let component: FashionHeaderComponent;
  let fixture: ComponentFixture<FashionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
