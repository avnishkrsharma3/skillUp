import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardViewfeedbackComponent } from './admin-dashboard-viewfeedback.component';

describe('AdminDashboardViewfeedbackComponent', () => {
  let component: AdminDashboardViewfeedbackComponent;
  let fixture: ComponentFixture<AdminDashboardViewfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardViewfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardViewfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
