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
exports.register = exports.login = void 0;
const auth_services_1 = require("../services/auth.services");
const dinamic_services_1 = require("../services/dinamic.services");
const user_1 = __importDefault(require("../models/schema/user"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const register = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const { password } = body;
        const passwordEncript = yield (0, bcrypt_handle_1.encrypt)(password);
        body.password = passwordEncript;
        const response = yield User.insert(body);
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.register = register;
const login = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const auth = new auth_services_1.Auth();
        const response = yield auth.loginUser({ email, password });
        if (typeof response === 'string') {
            res.status(400);
            res.send('Email or password are invalid');
        }
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.login = login;
