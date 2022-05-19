import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionHeroComponent } from './fashion-hero.component';

describe('FashionHeroComponent', () => {
  let component: FashionHeroComponent;
  let fixture: ComponentFixture<FashionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
