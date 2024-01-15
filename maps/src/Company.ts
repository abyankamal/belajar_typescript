import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
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

    markerContent() : string {
        return `
        <div>
        <h1>Company Name : ${this.companyName}</h1>
        <h3>Catch Prase : ${this.catchPrase}</h3>
        </div>
        `
    }
}