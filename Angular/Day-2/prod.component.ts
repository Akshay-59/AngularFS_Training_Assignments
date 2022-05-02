import { Component, OnInit } from '@angular/core';
import {prod } from '..\models\prod';
@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  
   @Input()
  category:string  = "";

  filteredProducts:prod[]=[];

   prodObj:prod[] = [
     {pid : 101, pname : "TV",  category :  "Electronic", price:15000, qty:1} ,
     {pid : 102, pname : "Speaker",  category :  "Gadget" , price:5000, qty:2},
     {pid : 103, pname : "Mobile",  category :  "Electronic" , price:20000, qty:1},
     {pid : 104, pname : "Camera",  category :  "Gadget" , price:10000, qty:2},
     {pid : 105, pname : "Fan",  category :  "Electronic" , price:9000, qty:1},
   ];


   ngOnInit(): void {
    this.filteredProducts = this.prodObj.filter(item=>item.category == this.category);


  }

}
