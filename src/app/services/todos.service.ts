import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../app.component';
import {Observable} from 'rxjs';

export interface Todo {
  completed: boolean
  titie: string
  id?: number
}

@Injectable({providedIn: 'todos'})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

}
