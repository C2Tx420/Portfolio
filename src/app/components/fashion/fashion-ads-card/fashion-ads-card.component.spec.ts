import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAdsCardComponent } from './fashion-ads-card.component';

describe('FashionAdsCardComponent', () => {
  let component: FashionAdsCardComponent;
  let fixture: ComponentFixture<FashionAdsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionAdsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionAdsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
