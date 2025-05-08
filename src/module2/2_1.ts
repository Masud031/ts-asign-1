{
// 
// generic arrey

type GenericArrey<t>=Array<t>


// const rollNumber:number[]=[30,40.50];
const rollNumber:GenericArrey<number>=[30,40.50];

const mentors:Array<string>=['masud','rana','sojib'];
const boolArrey:Array<boolean>=[true,false,true]

const bros1: string[] = ["Mir", "Firoz", "Mizan"];
const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
bros1.push(...bros2);

const moderat1={
    typscript:"mezbah",
    redux:"masud",
    JS:"shahin"
}
const moderator2={
    ss:"halim",
    ps:"kalim",
    ms:"dalim"
}
const allModeratorse={
    ...moderat1,
    ...moderator2
} 

const developer:{
    name:string,
    age:number,
    role:string
} ={

    name:'Masud',
    age:35,
    role:'admin'

}
console.log(developer);





// 
}