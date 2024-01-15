import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
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

    markerContent() : string {
        return `User Name : ${this.name}`
    }

}