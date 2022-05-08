import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sortName:string  = "ename";

  updateName(ename:string)
  {
    this.sortName = ename;
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Day4';
  

//   todoinput:string = "";
//   todovalue:string = "";

//   addNewTodo(){
//     this.todovalue = this.todoinput;
// }
// }
