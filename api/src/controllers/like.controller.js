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
exports.deleteLike = exports.insertLike = exports.getLikes = void 0;
const dinamic_services_1 = require("../services/dinamic.services");
const like_services_1 = require("../services/like.services");
const like_1 = __importDefault(require("../models/schema/like"));
const getLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const { publication: publicationId, id: userId } = req.params;
        const Like = new dinamic_services_1.DinamicServices(like_1.default);
        const response = yield Like.findByParams({ publicationId }, page, limit);
        const isLiked = yield (0, like_services_1.getLikedValidation)(publicationId, userId);
        if (!response || response.length === 0) {
            return res
                .status(204)
                .json({ msg: 'No content', data: [], isLiked: false });
        }
        res.json({
            msg: 'Successsful',
            data: response,
            isLiked,
            page,
            limit,
            total: response.length,
        });
    }
    catch (e) {
        console.error({ e });
    }
});
exports.getLikes = getLikes;
const insertLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { publication: publicationId, id: userId } = req.params;
        const Like = new dinamic_services_1.DinamicServices(like_1.default);
        const isLiked = yield (0, like_services_1.getLikedValidation)(publicationId, userId);
        if (isLiked)
            return res.status(400).json({ msg: 'Already liked this publication' });
        const response = yield Like.insert({
            userId,
            publicationId,
        });
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.insertLike = insertLike;
const deleteLike = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Like = new dinamic_services_1.DinamicServices(like_1.default);
        const response = yield Like.delete(id);
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
exports.deleteLike = deleteLike;
