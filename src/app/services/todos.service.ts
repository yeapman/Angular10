import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../app.component';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export interface Todo {
  completed: boolean
  titie: string
  id?: number
}

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo).pipe(catchError(error => {
      return throwError(error);
    }));
  }

}
