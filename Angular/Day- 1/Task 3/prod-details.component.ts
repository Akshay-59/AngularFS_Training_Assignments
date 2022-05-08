import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  @Input()
  sortColumn:string="pid";

  filteredProducts: any[]=[];

  products:any[] = [
    
    {category:"Shoes",pname:"Nike",pid:8,price:2000,quantity:15},
    {category:"Shoes",pname:"Reebok",pid:9,price:3800,quantity:19},
    {category:"Clothes",pname:"T-Shirt",pid:10,price:1000,quantity:100},
    {category:"Clothes",pname:"Shirt",pid:11,price:400,quantity:150},
    {category:"Clothes",pname:"Jeans",pid:12,price:1700,quantity:190},
  ]
  

ngOnChanges() {
  
  
   this.products.sort((a:any,b:any)=>a[this.sortColumn] < b[this.sortColumn] ? -1 : 1);
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
