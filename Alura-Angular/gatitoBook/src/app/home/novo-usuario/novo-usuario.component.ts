import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder,
    private homeService: HomeService,
    private router:Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      email: ["",  [Validators.required]],
      nome: [],
      password: []
    })
  }
  onCadastrar(){
    this.homeService.add(this.form.value)
    .subscribe(x=>{
      this.router.navigate([''])
    })
  }
}
