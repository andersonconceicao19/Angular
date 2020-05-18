
import {Routes, RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'curso/:id', component: CursoDetalheComponent }, //Adicionando rota passando parametro
    { path: 'cursos', component: CursosComponent },
    { path: 'naoencontrado', component: NaoEncontradoComponent }
];

export const routing =  RouterModule.forRoot(routes);