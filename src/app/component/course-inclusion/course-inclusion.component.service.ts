import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './course-inclusion.model'

@Injectable({
  providedIn: 'root'
})
export class CourseInclusionService {

  baseUrl = "http://localhost:3001/cursos"

  constructor( private http: HttpClient) { }

  create(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.baseUrl, curso)
  }

  read(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl)
  }

}