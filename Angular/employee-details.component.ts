import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number = 101;
  name:string="Stephen";
  role:string = "Manager";
  salary:number = 75000;
  departmentNo:number = 10;


  listOfNames:string[] = ["Ash","Test","TestUser","NewUser"];

  constructor() { }

  ngOnInit(): void {
  }

}
