import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public uName:string ="John";
  public email:string="abs@gmail.com";
  public age: number=25;
  public isValidUser:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
