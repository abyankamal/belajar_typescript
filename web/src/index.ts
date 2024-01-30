import { User } from "./models/User";

const user = new User();

user.events.on('change', () => {
    console.log('trigger');
});

user.events.trigger('change');

setTimeout(() => {
    console.log(user);
}, 1000);