"use strict";
var test = 'i am testing';

const add =(a,b)=>{
    if( typeof a!=="number" || typeof b!=="number"){
        return "both input must be number"
    }
    return a+b
}
console.log(add(5,"masud "));
