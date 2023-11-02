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
exports.deleteHistory = exports.getHistoryByParams = exports.insertHistory = exports.getHistories = exports.getHistory = void 0;
const dinamic_services_1 = require("../services/dinamic.services");
const history_1 = __importDefault(require("../models/schema/history"));
const getHistories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const History = new dinamic_services_1.DinamicServices(history_1.default);
        const response = yield History.findByParams({}, page, limit, 1);
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
exports.getHistories = getHistories;
const getHistory = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const History = new dinamic_services_1.DinamicServices(history_1.default);
        const response = yield History.getOne(id);
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
exports.getHistory = getHistory;
const getHistoryByParams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const History = new dinamic_services_1.DinamicServices(history_1.default);
        const response = yield History.findByParams({ body }, page, limit);
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
exports.getHistoryByParams = getHistoryByParams;
const insertHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const History = new dinamic_services_1.DinamicServices(history_1.default);
        const response = yield History.insert(body);
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.insertHistory = insertHistory;
const updateHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return;
        const data = req === null || req === void 0 ? void 0 : req.body;
        const History = new dinamic_services_1.DinamicServices(history_1.default);
        const response = yield History.update(id, data);
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
const deleteHistory = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const History = new dinamic_services_1.DinamicServices(history_1.default);
        const response = yield History.delete(id);
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
exports.deleteHistory = deleteHistory;
