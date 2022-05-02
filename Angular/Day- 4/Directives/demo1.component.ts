import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  
  displayMode:string  = "List";

  public  productsArray:any[] = [
      {pid  :  101, pname : "I-phone", category:"Mobile", price:85000, picture:"iphone.png"},
      {pid  :  102, pname : "I-pad", category:"Tab", price:120000, picture:"ipad.png"},
      {pid  :  103, pname : "Samsung ", category:"Mobile", price:45000, picture:"samsung.png"},
      {pid  :  104, pname : "Redmi", category:"Mobile", price:35000, picture:"redmi.png"},
      {pid  :  105, pname : "Lenovo", category:"Laptop", price:75000, picture:"lenovo.png"}


     ];

     
  constructor() { }
  

  ngOnInit(): void {
  }
  SetDisplay(mode:string){
    this.displayMode = mode;

}

}
