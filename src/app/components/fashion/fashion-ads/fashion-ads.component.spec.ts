import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAdsComponent } from './fashion-ads.component';

describe('FashionAdsComponent', () => {
  let component: FashionAdsComponent;
  let fixture: ComponentFixture<FashionAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
