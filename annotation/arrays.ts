const carMakers = ['ford', 'toyota', 'wuling'];
const dates = [new Date(), new Date()];

const carByMakes : string[][] = [];

// Help with inference when extracing value
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomatible value
// carMakers.push(100);
carMakers.push('ford');

// Help with map
carMakers.map((cars : string) : string =>{
    return cars.toUpperCase();
});

// Flexible types
const importantDates : (Date | string)[] = []
importantDates.push('2020-17-12');
importantDates.push(new Date());

