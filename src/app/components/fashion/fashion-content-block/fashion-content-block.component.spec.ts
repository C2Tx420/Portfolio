import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionContentBlockComponent } from './fashion-content-block.component';

describe('FashionContentBlockComponent', () => {
  let component: FashionContentBlockComponent;
  let fixture: ComponentFixture<FashionContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionContentBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
