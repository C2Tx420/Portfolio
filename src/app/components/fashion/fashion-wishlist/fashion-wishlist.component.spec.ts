import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionWishlistComponent } from './fashion-wishlist.component';

describe('FashionWishlistComponent', () => {
  let component: FashionWishlistComponent;
  let fixture: ComponentFixture<FashionWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
