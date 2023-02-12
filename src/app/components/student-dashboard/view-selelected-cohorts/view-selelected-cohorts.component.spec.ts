import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelelectedCohortsComponent } from './view-selelected-cohorts.component';

describe('ViewSelelectedCohortsComponent', () => {
  let component: ViewSelelectedCohortsComponent;
  let fixture: ComponentFixture<ViewSelelectedCohortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelelectedCohortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSelelectedCohortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
