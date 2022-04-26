class Person{
    public name: string= "John";
    public age : number= 23;
}
class Stud extends Person{
    
    public course: string = "Angular";
    public sid:number=0;

    constructor(sid: number){
        super();
        this.sid=sid;
    }
    public showDetails() : void{

        console.log (`Student Name: ${this.sid}, \n Student age: ${this.age}, \n Course name: ${this.course}, /n Student Id: ${this.sid}`)
    }
}
 var s: Stud=  new Stud(450);
 s.showDetails();