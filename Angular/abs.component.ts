import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent implements OnInit {

  public uname:string  = "Scott";
  public email:string  = "scott@gmail.com";
  public age:number  = 35
  public isValidUser:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
