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
exports.getByParams = exports.deleteUser = exports.updateUser = exports.insertUser = exports.getUsers = exports.getUser = void 0;
const dinamic_services_1 = require("../services/dinamic.services");
const user_1 = __importDefault(require("../models/schema/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const response = yield User.findByParams({}, page, limit);
        if (!response || response.length === 0) {
            return res.status(204).json({
                msg: 'No content',
            });
        }
        res.json({
            msg: 'Successsful',
            data: response,
            page,
            limit,
            total: response.length,
        });
    }
    catch (e) {
        console.error({ e });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const response = yield User.getOne(id);
        response != null
            ? res.send({
                msg: 'Successfull!',
                data: response,
            })
            : res.send({
                msg: 'Sorry, we are not find anything by this params',
            });
    }
    catch (e) {
        return res.status(400).json({ e });
    }
});
exports.getUser = getUser;
const getByParams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const page = parseInt(req.query.page) || 1; // Página actual
        const limit = parseInt(req.query.limit) || 10;
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const response = yield User.findByParams(body, page, limit);
        if (!response || response.length === 0) {
            return res.status(204).json({
                msg: 'No content',
            });
        }
        res.json({
            msg: 'Successsful',
            data: response,
            page,
            limit,
            total: response.length,
        });
    }
    catch (e) {
        console.error({ e });
    }
});
exports.getByParams = getByParams;
const insertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const response = yield User.insert(body);
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.insertUser = insertUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return;
        const data = req === null || req === void 0 ? void 0 : req.body;
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const response = yield User.update(id, data);
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.updateUser = updateUser;
const deleteUser = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const response = yield User.delete(id);
        response != null
            ? res.send({
                msg: 'Successfull!',
                data: response,
            })
            : res.send({
                msg: 'Sorry, we are not find anything by this params',
            });
    }
    catch (e) {
        console.error({ e });
    }
});
exports.deleteUser = deleteUser;
