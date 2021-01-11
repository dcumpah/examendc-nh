import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/shared/services/curso.service';
import { Curso } from 'src/app/shared/interfaces/curso';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.scss']
})
export class CursoContainerComponent implements OnInit {
  cursos: Curso[];
  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(
      cursos => this.cursos = cursos
    );
  }

}
