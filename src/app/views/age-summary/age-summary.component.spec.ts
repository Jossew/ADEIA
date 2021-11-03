import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeSummaryComponent } from './age-summary.component';

describe('AgeSummaryComponent', () => {
  let component: AgeSummaryComponent;
  let fixture: ComponentFixture<AgeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
