import { TestBed } from '@angular/core/testing';

import { StudentGaurdGuard } from './student-gaurd.guard';

describe('StudentGaurdGuard', () => {
  let guard: StudentGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
