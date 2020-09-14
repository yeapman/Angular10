import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
// how add query parametrs
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      params: new HttpParams().set('_limit', '3')
    })
  }
}
