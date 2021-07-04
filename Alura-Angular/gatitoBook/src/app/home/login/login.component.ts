import { AuthUser } from './../../shared/models/authUser';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }
    user$!: AuthUser;
  ngOnInit() {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      password: [""]
    })
  }
  onLogin(){
    this.authService.autenticar(this.form.value)
    .subscribe(x => {
      /**
       * Escrevendo desta forma pois retorna 200 mesmo se não encontrar,
       * então está filtrando se está vazio ou nao.
      */

     console.log(x);

      if(x.length == 0){
       // add any thing.
      this.form.valid
      }else{
        this.router.navigate(['animais'])
      }
    })


  }

}
