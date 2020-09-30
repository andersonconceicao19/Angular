import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private loadingController: LoadingController,
    private toatsController: ToastController,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  async onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const loading = await this.loadingController.create({
      message: 'A fill moment',
    });
    loading.present();

    this.dataService.authenticate(this.form.value).subscribe(
      (success) => {
        // a
        this.navController.navigateRoot('/');
      },
      (error) => {
        this.showError('usuario invalido');
      },
      () => loading.dismiss()
    );
  }
  onResetPassword() {}

  async showError(message: any) {
    const error = await this.toatsController.create({
      message: `${message}`,
      duration: 1500,
    });
    error.present();
  }
}
