import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
    id?: string | number;
    name?: string;
    age?: number;
}

const rootUrl: string = "http://localhost/3000/users";

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }

    get on(){
        return this.events.on;
    }

    get trigger(){
        return this.events.trigger;
    }

    get get(){
        return this.attributes.get;
    }

    set(update : UserProps) : void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch() : void {
        const id = this.get('id');

        if(typeof id !== 'number' && typeof id !== 'string'){
            throw new Error('id must be a string or number');  
        }

        this.sync.fetch(id).then(
            (response: AxiosResponse): void => {
                this.set(response.data);
            }
        )
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
        .then((response: AxiosResponse): void => {
            this.trigger('save');
        })
        .catch(() => {
            this.trigger('error');
        })
    }

}