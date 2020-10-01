import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NavController } from '@ionic/angular';
import { Security } from '../../util/Secutity';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  user: UserModel;
  constructor(private nav: NavController) { }

  ngOnInit() {
    this.user = Security.get();
  }

  logout()
  {
    Security.clear();
    this.nav.navigateRoot('/login');
  }

}
