import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionUserComponent } from './fashion-user.component';

describe('FashionUserComponent', () => {
  let component: FashionUserComponent;
  let fixture: ComponentFixture<FashionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
