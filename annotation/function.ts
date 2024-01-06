const add = (a: number, b: number) => {
    return a + b;
}

const subtract = (a: number, b: number) => {
    return a - b;
}

function devider(a: number,b: number) {
    return a / b;
}

const multiply = (a: number, b: number) => {
    return a * b;
}

// void cannot return the value
const logger = (messages: string) : void => {
    return console.log(messages);
}

// never indicates the values that will never occur.
const throwError = (messages: string) : never => {
    throw new Error(messages);
}

const todaysWeather = {
    date : new Date(),
    weather : 'sunny'
}
const logWeather = ({date,weather} : {date : Date; weather : string}) : void => {
    console.log(date);
    console.log(weather);
}