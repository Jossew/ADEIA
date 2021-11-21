import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAgeComponent } from './custom-age.component';

describe('CustomAgeComponent', () => {
  let component: CustomAgeComponent;
  let fixture: ComponentFixture<CustomAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
