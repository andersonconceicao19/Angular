import { Component, OnInit } from '@angular/core';

import { Services} from './services'

@Component({
  selector: 'app-servicesclass',
  templateUrl: './servicesclass.component.html',
  styleUrls: ['./servicesclass.component.css']
})
export class ServicesclassComponent implements OnInit {


cursos: string[] = []
cursoServices: Services;

  constructor() { 
    this.cursoServices = new Services(); //Uma das formas de injetar dependencia. 
  }

  ngOnInit(): void {
    this.cursos = this.cursoServices.GetCursos(); //Inicializando o metodo junto com a aplicação
  }

}
