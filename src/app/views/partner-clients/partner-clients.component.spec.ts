import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerClientsComponent } from './partner-clients.component';

describe('PartnerClientsComponent', () => {
  let component: PartnerClientsComponent;
  let fixture: ComponentFixture<PartnerClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
