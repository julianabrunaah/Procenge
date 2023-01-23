import { Component } from '@angular/core';
import { Curso } from './course-inclusion.model';
import { CourseInclusionService } from './course-inclusion.service'

@Component({
  selector: 'app-course-inclusion',
  templateUrl: './course-inclusion.component.html',
  styleUrls: ['./course-inclusion.component.css']
})
export class CourseInclusionComponent{
  curso: Curso = {
    nome: '',
    instrutor: '',
    local: '',
    cargaHoraria: 0,
    dataInicio: ''
  }

  constructor(private courseInclusion: CourseInclusionService) { }

  createCourse(): void {
    this.courseInclusion.create(this.curso)
  }

}