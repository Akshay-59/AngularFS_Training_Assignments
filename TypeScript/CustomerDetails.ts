class Customer{
public custId: number = 0;
public custName:String = "" ;
public custLocation:String = "" ;

constructor(custId: number =0 , custName: String = "" , custLocation:String = "" )
{
    this.custId=custId;
    this.custName=custName;
    this.custLocation=custLocation;

}
public showDetails(){
    console.log("Customer Id: "+this.custId);
    console.log("Customer Name: "+this.custName);
    console.log("Customer Location: "+this.custLocation);
    console.log("--------------------------------------");
}
}
let c1:Customer = new Customer(1234);
let c2:Customer = new Customer(25, "John");
let c3:Customer = new Customer();
let c4:Customer = new Customer(25, "John", "Pune");



c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();

