"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
const Metadata_1 = require("./Metadata");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(Metadata_1.Metadata.path, path, target, key);
            Reflect.defineMetadata(Metadata_1.Metadata.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.put);
exports.post = routeBinder(Methods_1.Methods.post);
exports.put = routeBinder(Methods_1.Methods.put);
exports.del = routeBinder(Methods_1.Methods.delete);
exports.patch = routeBinder(Methods_1.Methods.patch);
