// todos.component.ts

import { Component } from '@angular/core';
import { ToDo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localitem: string;
  todos: ToDo[] = [];

  constructor() {
    this.localitem = this.getStoredTodos();

    if (this.localitem === '') {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localitem);
    }
  }

  private getStoredTodos(): string {
    try {
      if (typeof localStorage !== 'undefined') {
        return localStorage.getItem("todos") ?? '';
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
    return '';
  }

  deleteTodo(todo: ToDo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.updateLocalStorage();
  }

  addTodo(todo: ToDo) {
    console.log(todo);
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  toggleTodo(todo: ToDo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  }
}
