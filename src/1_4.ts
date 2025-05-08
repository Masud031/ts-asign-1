class student{
    name:String;
    age:number;
    roll:number

    constructor(name:string,age:number,roll:number){
        this.name=name;
        this.age=age;
        this.roll=roll;  
    }
    getSleep(NumberOfHour:Number){
        console.log(`this ${this.name} sleep ${NumberOfHour}`);
    }

}
const student1= new student('masud',35,80);
const student2= new student('rasel',30,40)
student1.getSleep(8);