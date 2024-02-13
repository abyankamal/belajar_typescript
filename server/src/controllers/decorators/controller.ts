import 'reflect-metadata';
import { AppRouter } from '../../appRouter';
import { Methods } from './Methods';
import { Metadata } from './Metadata';

export function controller(routePrefix: string) {
    return function(target: Function) {
        const router = AppRouter.getInstance();
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(Metadata.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(Metadata.method, target.prototype, key);
            if(path) {
                router[method](`${routePrefix}${path}`, routeHandler);
            } 
          });
    }
}