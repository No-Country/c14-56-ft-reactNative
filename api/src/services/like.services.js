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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikedValidation = void 0;
const like_1 = __importDefault(require("../models/schema/like"));
const dinamic_services_1 = require("./dinamic.services");
const getLikedValidation = (publicationId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Like = new dinamic_services_1.DinamicServices(like_1.default);
        const response = yield Like.findByParams({
            publicationId,
            userId,
        });
        if (response) {
            if (response.length > 0)
                return true;
        }
        return false;
    }
    catch (e) {
        console.error(e);
    }
});
exports.getLikedValidation = getLikedValidation;
