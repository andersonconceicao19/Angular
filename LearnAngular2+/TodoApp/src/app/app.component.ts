import { Component } from '@angular/core';

import { Todo } from './Models/TodoModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titulo: ['', [Validators.maxLength(60), Validators.minLength(3), Validators.required]]
    });
    this.Load();
  }
  Adicionar(): void
  {
    const titulo = this.form.controls[`titulo`].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, titulo, false));
    this.Save();
    this.Clear();
  }
  Apagar(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1 ){
      this.todos.splice(index, 1);
    }
    this.Save();
  }
  Alterar(todo: Todo): void {
    todo.Ativo = !todo.Ativo;
    this.Save();
  }
  Save(): void{
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }
  Load(): void{
    const data = localStorage.getItem('todos');
    data != null ? this.todos = JSON.parse(data) : this.todos = [];
    }
  Clear(): void{
    this.form.reset();
  }
}
