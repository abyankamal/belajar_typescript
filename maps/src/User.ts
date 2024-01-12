import { faker } from "@faker-js/faker";

export const udud = 'udud';

export class User {
    name : string
    location : {
        latitude : number,
        longtitude : number
    }

    constructor() {
        this.name = faker.person.fullName();
        this.location = {
            latitude : faker.location.latitude(),
            longtitude : faker.location.longitude()
        }
    }

}