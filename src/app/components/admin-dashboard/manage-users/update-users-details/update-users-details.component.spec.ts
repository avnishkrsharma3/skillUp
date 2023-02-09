import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUsersDetailsComponent } from './update-users-details.component';

describe('UpdateUsersDetailsComponent', () => {
  let component: UpdateUsersDetailsComponent;
  let fixture: ComponentFixture<UpdateUsersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUsersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
