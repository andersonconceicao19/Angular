import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackebar:MatSnackBar ) { }

  showmessage(msg: string): void
  {
    this.snackebar.open(msg, 'x', {
     duration: 3000,
     horizontalPosition: "center",
     verticalPosition: "top"
    })
  }

}
