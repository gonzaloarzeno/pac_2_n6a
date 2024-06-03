import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService, Todo } from '../todos.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  constructor(private todosService: TodosService, private router: Router) {}

  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  searchTerm: string = '';
  isSearchButtonEnabled: boolean = false;
  faInfoCircle = faInfoCircle;

  ngOnInit(): void {
    this.todosService.getAll().subscribe((data: Todo[]) => {
      this.todos = data;
      this.filteredTodos = this.todos
    });
  }

  search() : void {
    console.log(this.searchTerm)
    if (this.searchTerm.trim() === '') {
      this.filteredTodos = this.todos;
    } 
    else {
      this.filteredTodos = this.todos.filter(todo => 
        todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  viewDetail(id: number): void {
    this.router.navigate(['/todo', id]);
  }
}
