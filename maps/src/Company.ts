import { faker } from "@faker-js/faker";

export class Company {
    companyName : string
    catchPrase : string
    location : {
        latitude : number,
        longtitude : number
    }

    constructor(){
        this.companyName = faker.company.name()
        this.catchPrase = faker.company.catchPhrase()
        this.location = {
            latitude : faker.location.latitude(),
            longtitude : faker.location.longitude()
        }
    }
}