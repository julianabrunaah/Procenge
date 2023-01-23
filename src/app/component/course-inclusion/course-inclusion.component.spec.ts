import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInclusionComponent } from './course-inclusion.component';

describe('CourseInclusionComponent', () => {
  let component: CourseInclusionComponent;
  let fixture: ComponentFixture<CourseInclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInclusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});