import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public sid:number  = 100;
  public sname:string  =  "John";
  public email:string  =  "john@gmail.com";
  public course:string  =  "Angular";
  public fee:number  =   10000;
  public joinDate:Date  =   new Date();
 
  constructor() { }

  ngOnInit(): void {
  }

}
