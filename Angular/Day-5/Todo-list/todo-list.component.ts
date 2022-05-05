import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  newtodo:any;

  todolist: any[] = [];

  strike:any;

  constructor() { }

  ngOnChanges(): void {
    this.todolist.push({id : this.todolist.length + 1 , itemName : this.newtodo , isDone : false});
  }

  ngOnInit(): void {

    this.todolist = [{ id: 1, itemName: "Todo 1", isDone: false },
    { id: 2, itemName: "Todo 2", isDone: false }
    
  ];

  }

  deleteTodo(index:number){
    this.todolist.splice(index,1);
  }

  updateTodo(index:number){
    let updatedTodo:any = prompt("Enter Updated Todo Task Name");
    this.todolist[index].itemName = updatedTodo;
  }

  deleteDoneTodo(){
    this.todolist = this.todolist.filter(todo => todo.isDone == false);
  }

  deleteAllTasks(){
    this.todolist = [];
  }
 

}
