import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInsightsComponent } from './video-insights.component';

describe('VideoInsightsComponent', () => {
  let component: VideoInsightsComponent;
  let fixture: ComponentFixture<VideoInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
