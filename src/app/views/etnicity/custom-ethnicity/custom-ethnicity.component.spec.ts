import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEthnicityComponent } from './custom-ethnicity.component';

describe('CustomEthnicityComponent', () => {
  let component: CustomEthnicityComponent;
  let fixture: ComponentFixture<CustomEthnicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEthnicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEthnicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
