import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  id: Number;
  inscricao: Subscription 
  curso: any;

  constructor(private route: ActivatedRoute, 
      private cursoService: CursoService,
      private routes: Router) {
    //this.id = this.route.snapshot.params['id']
   }


  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) =>  this.id = params['id'])

    this.curso = this.cursoService.getCursobyId(this.id)
    if (this.curso == null) {
      this.routes.navigate(['/naoencontrado'])
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();

  }
  /**
   * 
   * SUBSCRIPTION => Utilizar subscription para monitorar o elemento e força que quando ele for destruido, ele seja realmente destruido 
   * 
   * */
}
