import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {TodoService} from './services/todos.service';

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

  constructor(private http: HttpClient, private service: TodoService) {
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

    this.service.addTodo({
      title: this.toDoTitle,
      completed: false
    }).subscribe(todo => {
      this.todos.push(todo)
    })
  }

    removeTodo(id: number) {
      this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .subscribe(resp => {
            this.todos = this.todos.filter(t => t.id !== id )
        })


    }









}
