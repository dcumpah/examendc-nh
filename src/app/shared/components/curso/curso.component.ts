import { Component, OnInit, Input } from '@angular/core';
import { Curso } from 'src/app/shared/interfaces/curso';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
@Input() curso: Curso;
  constructor() { }

  ngOnInit(): void {
  }

}
