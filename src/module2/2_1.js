"use strict";
{
    // const rollNumber:number[]=[30,40.50];
    const rollNumber = [30, 40.50];
    const mentors = ['masud', 'rana', 'sojib'];
    const boolArrey = [true, false, true];
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["Tanmoy", "Nahid", "Rahat"];
    bros1.push(...bros2);
    const moderat1 = {
        typscript: "mezbah",
        redux: "masud",
        JS: "shahin"
    };
    const moderator2 = {
        ss: "halim",
        ps: "kalim",
        ms: "dalim"
    };
    const allModeratorse = Object.assign(Object.assign({}, moderat1), moderator2);
    const developer = {
        name: 'Masud',
        age: 35,
        role: 'admin'
    };
    console.log(developer);
    // 
}
