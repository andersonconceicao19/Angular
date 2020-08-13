import { Component } from '@angular/core';

import { Todo } from './Models/TodoModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    this.todos.push(new Todo(1, 'feito', false));
    this.todos.push(new Todo(2, 'Le Livros', false));
    this.todos.push(new Todo(3, 'Le Livros', false));
  }
  Adicionar(): void
  {
    const titulo = this.form.controls[`titulo`].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, titulo, false));
    this.Clear();
  }
  Apagar(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1 ){
      this.todos.splice(index, 1);
    }
  }
  Alterar(todo: Todo): void {
    todo.Ativo = !todo.Ativo;
  }
  Clear(): void{
    this.form.reset();
  }
}
