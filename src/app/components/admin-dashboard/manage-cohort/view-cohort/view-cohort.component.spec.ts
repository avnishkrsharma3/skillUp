import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCohortComponent } from './view-cohort.component';

describe('ViewCohortComponent', () => {
  let component: ViewCohortComponent;
  let fixture: ComponentFixture<ViewCohortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCohortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
