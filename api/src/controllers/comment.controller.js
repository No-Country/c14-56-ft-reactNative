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
exports.getByParams = exports.deleteComment = exports.updateComment = exports.insertComment = exports.getComments = exports.getComment = void 0;
const dinamic_services_1 = require("../services/dinamic.services");
const comment_1 = __importDefault(require("../models/schema/comment"));
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { publication: publicationId } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const Comment = new dinamic_services_1.DinamicServices(comment_1.default);
        const response = yield Comment.findByParams({ publicationId }, page, limit, 1);
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
exports.getComments = getComments;
const getComment = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Comment = new dinamic_services_1.DinamicServices(comment_1.default);
        const response = yield Comment.getOne(id);
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
exports.getComment = getComment;
const getByParams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const Comment = new dinamic_services_1.DinamicServices(comment_1.default);
        const response = yield Comment.findByParams(body, page, limit);
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
const insertComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { publication: publicationId } = req.params;
        const Comment = new dinamic_services_1.DinamicServices(comment_1.default);
        body.publicationId = publicationId;
        const response = yield Comment.insert(body);
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.insertComment = insertComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return;
        const data = req === null || req === void 0 ? void 0 : req.body;
        const Comment = new dinamic_services_1.DinamicServices(comment_1.default);
        const response = yield Comment.update(id, data);
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.updateComment = updateComment;
const deleteComment = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Comment = new dinamic_services_1.DinamicServices(comment_1.default);
        const response = yield Comment.delete(id);
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
exports.deleteComment = deleteComment;
