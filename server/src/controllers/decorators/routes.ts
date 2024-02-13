import 'reflect-metadata';
import { Methods } from './Methods';
import { Metadata } from './Metadata';

function routeBinder(method: string){
    return function(path: string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata(Metadata.path, path, target, key);
            Reflect.defineMetadata(Metadata.method, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.delete);
export const patch = routeBinder(Methods.patch);