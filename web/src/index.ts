import { User } from "./models/User";

const user = new User({name: "John", age: 28});

user.set({"age": 38});

console.log(user.get('name'));
console.log(user.get('age'));