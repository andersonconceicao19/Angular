import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  constructor(private services: DataService, private fb: FormBuilder)
  {
    this.form = this.fb.group(
      {
        username: ['', [Validators.minLength(11), Validators.maxLength(11), Validators.required]],
        password: ['', [Validators.minLength(6), Validators.maxLength(20), Validators.required]]
      }
    );
  }

  ngOnInit(): void {

  }

   submit()
   {
     this.services.autenticate(this.form.value).subscribe(
       data => {
         console.log(data);

       },
       error => {
         console.log(error);

       }
     )
   }
}
