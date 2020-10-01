import { MenuController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {

  constructor(
    private navController: NavController,
    private menuController: MenuController
  ) { }

  ngOnInit() {}

  goToPage(page: string)
  {
    this.menuController.close();
    this.navController.navigateRoot(page);
  }

}
