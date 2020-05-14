import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos()
  {
    return [
      {
        id: 1,
        nome: 'Angular'
      },
      {
        id: 2,
        nome: '.NETCore'
      }
    ]
  }

  getCursobyId(idCurso: Number)
  {
    let curso = this.getCursos().filter(x => x.id == idCurso)[0]
      
    if (curso != null) {
      return curso
    }
    /**
     * Há as duas formas de fazer.
     
     * Formas de fazer
     * for (let index = 0; index < cursos.length; index++) {
     
      let curso = cursos[index];

      if (curso.id == idCurso) {
        return curso;
      }      
    }
     */
    return null    
  }
}
