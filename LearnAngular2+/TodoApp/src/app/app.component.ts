import { Component } from '@angular/core';

import { Todo } from './Models/TodoModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = [];

  constructor(){
    this.todos.push(new Todo(1, 'feito', false));
    this.todos.push(new Todo(2, 'Le Livros', false));
    this.todos.push(new Todo(3, 'Le Livros', false));
  }
  Apagar(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1 ){
      this.todos.splice(index, 1);
    }
  }
}
