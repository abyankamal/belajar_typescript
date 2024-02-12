import "reflect-metadata";

@printMetadata
class Plane {
    color : string = 'black';

    @markFunction('Hi There')
    fly(): void {
        console.log('vrrrrr');
    }
}

function markFunction(secretInfo: string){
    return function(target: Plane, key: string){
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }
}

function printMetadata(target: typeof Plane){
    for(let key in target.prototype){
        const secret = Reflect.getMetadata('secret', target.prototype, 'fly');
        console.log(secret);
    }
}