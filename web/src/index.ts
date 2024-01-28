import { User } from "./models/User";

const user = new User({id: "a969"});

user.fetch();

setTimeout(() => {
    console.log(user);
}, 5000);