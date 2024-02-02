import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Model } from "./Model";

export interface UserProps {
    id?: string | number;
    name?: string;
    age?: number;
}

const rootUrl: string = "http://localhost:3000/users";

export class User extends Model<UserProps> {
    static buildUser(attrs : UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new ApiSync<UserProps>(rootUrl),
            new Eventing()
        );
    }
    
}