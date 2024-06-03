import { Component } from '@angular/core';
import { TodosService, Todo } from '../todos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {
  todo: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.todosService.getById(id).subscribe((data: Todo) => {
      this.todo = data;
    });
  }
  
  goBack(): void {
    this.location.back(); 
  }

}
