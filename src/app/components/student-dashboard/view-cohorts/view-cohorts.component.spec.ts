import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCohortsComponent } from './view-cohorts.component';

describe('ViewCohortsComponent', () => {
  let component: ViewCohortsComponent;
  let fixture: ComponentFixture<ViewCohortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCohortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCohortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
