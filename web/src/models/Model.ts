import AxiosPromise from "axios";

type Callback = () => void;
interface ModelAttributes<T> {
    set(value: T): void;
    get<K extends keyof T>(key : K): T[K];
    getAll(): T;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback : Callback) : void;
    trigger(eventName: string) : void;
}

export class Model {

}