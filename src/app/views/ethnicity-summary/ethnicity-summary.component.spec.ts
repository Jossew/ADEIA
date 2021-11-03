import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicitySummaryComponent } from './ethnicity-summary.component';

describe('EthnicitySummaryComponent', () => {
  let component: EthnicitySummaryComponent;
  let fixture: ComponentFixture<EthnicitySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthnicitySummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
