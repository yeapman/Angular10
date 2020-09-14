import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  loading: boolean = false;

  toDoTitle = '';

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(data =>  {
        console.log(data);
        this.todos = data;
        this.loading = false;
      })
  }

  addTodo() {
    if(!this.toDoTitle.trim()) {
      return
    }
    const newTodo: Todo = {
      title: this.toDoTitle,
      completed: false
    };
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        console.log('todo', todo)
        this.todos.push(todo)
      })
  }









}
