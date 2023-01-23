import { TestBed } from '@angular/core/testing';

import { CourseInclusionService } from './course-inclusion.service';

describe('CourseInclusionService', () => {
  let service: CourseInclusionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInclusionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});