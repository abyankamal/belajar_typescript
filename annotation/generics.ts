// generics classes

class ArraysOfNumbers {
    constructor(public collection: number[]) { }
    get(index : number): number {
        return this.collection[index];
    }
}

class ArraysOfStrings {
    constructor(public collection: string[]) { }
    get(index : number): string {
        return this.collection[index];
    }
}

class ArraysOfAnythings<T> {
    constructor(public collection: T[]) {}
    get(index : number): T {
        return this.collection[index];
    }
}

new ArraysOfAnythings<string>(['a', 'b', 'c'])

// Generics functions

function printNumbers(arr : number[]) : void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printStrings(arr : string[]) : void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]) : void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<number>([1, 2, 3, 4])

// another example

class House {
    print() : void {
        console.log('I am a house');
    }
}

class Car {
    print() : void {
        console.log('I am a car');
    }
}

interface Printable {
    print() : void;
}

function printHouseOrCar<T extends Printable>(arr : T[]) : void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHouseOrCar<House>([new House(), new House()]);
printHouseOrCar<Car>([new Car(), new Car()]);