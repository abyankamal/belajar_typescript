const angka : number = 5;
const huruf : string = "iiii";
const cariBoolean : boolean = false;
const nothingMuch : null = null;
const nothing : undefined = undefined;

// built in objects
const date : Date = new Date();

// array
const numbers : number[] = [1,2,3,4,5,6,7,8,9,10];
const names : string[] = ["amad", "jamal", "husein"];
const booleans : boolean[] = [true, false];

// class 
class Car {

}
const car : Car = new Car();

// object literals
const point : {x : number, y: number} = {
    x: 20,
    y: 20
}

// function
const logNumber: (i: number) => void = ( i: number) => {
    console.log(i);
}

// when to use annotations
// 1) Function that returns 'any' type
const json = '{"x" = 10, "y" = 20}';
const coordinates : {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) lWhen we declare a variable on one line and iniziate it later
let words = ['red', 'green', 'blue'];
let foundWords : boolean = false;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWords = true
    }
}
