import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MaterializeModule } from "angular2-materialize";



import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import {CursoService} from './cursos/curso.service';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component'

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    LoginComponent,
    HomeComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent,
   
  ],
  imports: [
    BrowserModule,
    routing
    //MaterializeModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
