class ProdDetails{

    private productId:number;
    private productName:String;
    private unitPrice: number;
    private qty: number;

    constructor(prodId:number){
        this.productId=prodId;
    }
    // type Container = {
    //     get: () => Content
    //     set: (value: Content) => void
    // }

    public get prodId():number{
        return this.productId;
    }
    public set prodId(value : number){
       this.productId=value;
    }
    public get prodName():String{                   
        return this.productName;

    }
    public set prodName(value:String){
        this.productName=value;
    }
    public get prodUnitPrice():number{
        return this.unitPrice;
    }
    public set ProdUnitPrice(value:number){
        this.unitPrice=value;

    }
    public get quantity():number{
        return this.qty;
    }
    public set quantity(value:number){
        this.qty=value;
    }
} 
let obj:ProdDetails= new ProdDetails(10);
obj.prodId=123;
obj.prodName="I-phone";
obj.ProdUnitPrice=45000;
obj.quantity=3;

console.log(`Product Details :: ProductId = ${obj.prodId} , ProductName = ${obj.prodName} , UnitPrice = ${obj.prodUnitPrice} , Quantity=${obj.quantity}`);
