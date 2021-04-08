import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component1Component } from './component1/component1.component';
import { CursoListComponent } from './curso-list/curso-list.component';



@NgModule({
  declarations: [
    CursoListComponent,
    Component1Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursoListComponent,
    Component1Component,
  ]
})
export class CursosModule { }
