import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../interfaces/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
  private http: HttpClient
  ) { }
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.apiUrl}course/`);
  }
  getCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${environment.apiUrl}course/${id}/`);
  }
}
