"use strict";
class student {
    constructor(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    getSleep(NumberOfHour) {
        console.log(`this ${this.name} sleep ${NumberOfHour}`);
    }
}
const student1 = new student('masud', 35, 80);
const student2 = new student('rasel', 30, 40);
student1.getSleep(8);
