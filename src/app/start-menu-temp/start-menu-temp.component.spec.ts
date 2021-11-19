import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMenuTempComponent } from './start-menu-temp.component';

describe('StartMenuTempComponent', () => {
  let component: StartMenuTempComponent;
  let fixture: ComponentFixture<StartMenuTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartMenuTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMenuTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
