import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
    private googleMap : google.maps.Map;

    constructor(divId : string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom : 1,
            center : {
                lat : 0,
                lng: 0
            }
        })
    }

    addUserMarker(user : User) : void {
        new google.maps.Marker({
            map : this.googleMap,
            position : {
                lat : user.location.latitude,
                lng : user.location.longtitude
            }
        })
    }

    addCompanyMarker(company : Company) : void {
        new google.maps.Marker({
            map : this.googleMap,
            position : {
                lat : company.location.latitude,
                lng : company.location.longtitude
            }
        })
    }
}