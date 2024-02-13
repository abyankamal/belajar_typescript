"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const appRouter_1 = require("../../appRouter");
const Metadata_1 = require("./Metadata");
function controller(routePrefix) {
    return function (target) {
        const router = appRouter_1.AppRouter.getInstance();
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(Metadata_1.Metadata.path, target.prototype, key);
            const method = Reflect.getMetadata(Metadata_1.Metadata.method, target.prototype, key);
            if (path) {
                router[method](`${routePrefix}${path}`, routeHandler);
            }
        });
    };
}
exports.controller = controller;
