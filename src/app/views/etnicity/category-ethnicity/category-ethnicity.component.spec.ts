import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEthnicityComponent } from './category-ethnicity.component';

describe('CategoryEthnicityComponent', () => {
  let component: CategoryEthnicityComponent;
  let fixture: ComponentFixture<CategoryEthnicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEthnicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEthnicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
