"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinamicServices = void 0;
class DinamicServices {
    constructor(schemaModel) {
        this.schemaModel = schemaModel;
    }
    insert(data) {
        return new Promise((resolve, reject) => {
            const response = this.schemaModel.create(data);
            if (!response)
                reject('Error! Insert action failed');
            resolve(response);
        });
    }
    getOne(id) {
        return new Promise((resolve, reject) => {
            if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
                reject('Please type valid ID');
            }
            const response = this.schemaModel.findById(id);
            if (!response)
                reject('Error! Find action failed');
            resolve(response);
        });
    }
    findByParams(data, page = 1, limit = 10, order = -1) {
        const skip = (page - 1) * limit;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!data) {
                reject('Error! Select a valid data');
                return;
            }
            try {
                const response = yield this.schemaModel
                    .find(data)
                    .sort({ createdAt: order })
                    .skip(skip)
                    .limit(limit);
                resolve(response);
            }
            catch (error) {
                reject('Error! Find action failed');
            }
        }));
    }
    get(pageNumber, limitNumber) {
        const page = parseInt(pageNumber) || 1;
        const limit = parseInt(limitNumber) || 10;
        const skip = (page - 1) * limit;
        return new Promise((resolve, reject) => {
            const response = this.schemaModel
                .find({})
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit);
            if (!response)
                reject("Didn't find any match");
            resolve(response);
        });
    }
    update(id, data) {
        return new Promise((resolve, reject) => {
            if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
                reject('ID no proporcionado');
            }
            const response = this.schemaModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            if (!response)
                reject('Error! Update action failed');
            resolve(response);
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
                reject('ID no proporcionado');
            }
            const response = this.schemaModel.findByIdAndDelete(id);
            if (!response)
                reject('Error! Delete action failed');
            resolve(response);
        });
    }
}
exports.DinamicServices = DinamicServices;
