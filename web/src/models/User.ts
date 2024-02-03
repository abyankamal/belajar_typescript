import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Model } from "./Model";
import { Collection } from "./Collection";

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

    static buildUserCollection() : Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
        )
    }
}