import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-registration-form',
  templateUrl: './vehicle-registration-form.component.html',
  styleUrls: ['./vehicle-registration-form.component.css']
})
export class VehicleRegistrationFormComponent implements OnInit {
  customerForm:FormGroup = new FormGroup({

    owner_name : new FormControl("", Validators.required),
    contact_number : new FormControl("", [Validators.required,Validators.pattern("\\d{10}")]),
    email : new FormControl("", Validators.email),
    Registration_number: new FormControl("", [Validators.required, Validators.pattern("[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}")]),
    address : new FormControl("", Validators.required),
    model : new FormControl("", [Validators.required,Validators.pattern("[a-z]{1,10}")]),
    color : new FormControl("", Validators.required),
    year: new FormControl("", [Validators.min(2012), Validators.max(2022)])
    

  });

public submit_click():void
 {
     // ajax call to send data to server
     alert("Customer Details are registered.");
     let customerObj = this.customerForm.value;
     console.log(customerObj);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
