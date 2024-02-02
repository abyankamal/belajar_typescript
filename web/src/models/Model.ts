import {AxiosPromise, AxiosResponse} from "axios";

type Callback = () => void;
interface ModelAttributes<T> {
    set(value: T): void;
    get<K extends keyof T>(key : K): T[K];
    getAll(): T;
}

interface Sync<T> {
    fetch(id: number | string): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback : Callback) : void;
    trigger(eventName: string) : void;
}

interface HasId {
    id?: string | number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private sync: Sync<T>,
        private events: Events
    ){}

    on = this.events.on;
    trigger = this.events.trigger;

    get get(){
        return this.attributes.get;
    }

    set(update : T) : void {
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