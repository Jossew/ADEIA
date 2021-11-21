import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAgeComponent } from './category-age.component';

describe('CategoryAgeComponent', () => {
  let component: CategoryAgeComponent;
  let fixture: ComponentFixture<CategoryAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
