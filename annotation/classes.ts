class Vehicle {
    constructor(public color : string){}
    protected honk(): void {
        console.log('Honk')
    }
}

const vehicle = new Vehicle('Orange');
console.log(vehicle.color)

class Car extends Vehicle {
    constructor(public wheel : number, color : string){
        super(color)
    }
    private drive(): void {
        console.log('Vroom')
    }

    startDrivingProcess(){
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
console.log(car.startDrivingProcess)
