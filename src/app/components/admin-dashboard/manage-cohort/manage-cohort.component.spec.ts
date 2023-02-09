import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCohortComponent } from './manage-cohort.component';

describe('ManageCohortComponent', () => {
  let component: ManageCohortComponent;
  let fixture: ComponentFixture<ManageCohortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCohortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
