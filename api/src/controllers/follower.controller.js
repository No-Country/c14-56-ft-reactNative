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
exports.deleteFollower = exports.updateFollower = exports.insertFollower = exports.getFollowers = exports.getOneFollower = exports.getFollowerRelational = exports.getFolloweds = void 0;
const dinamic_services_1 = require("../services/dinamic.services");
const follower_1 = __importDefault(require("../models/schema/follower"));
const error_handle_1 = require("../utils/error.handle");
const getFollowerRelational = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { followerId, followedId } = params;
        const Follower = new dinamic_services_1.DinamicServices(follower_1.default);
        const response = yield Follower.findByParams({
            userFollowed: followedId,
            userFollower: followerId,
        });
        if (Array.isArray(response) && (response === null || response === void 0 ? void 0 : response.length) > 0)
            return res.status(200).json({ match: true, data: response });
        res.status(200).json({ data: false });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SECTIONS', e);
    }
});
exports.getFollowerRelational = getFollowerRelational;
const getFollowers = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Follower = new dinamic_services_1.DinamicServices(follower_1.default);
        const response = yield Follower.findByParams({ userFollower: id });
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SECTIONS', e);
    }
});
exports.getFollowers = getFollowers;
const getFolloweds = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Follower = new dinamic_services_1.DinamicServices(follower_1.default);
        const response = yield Follower.findByParams({ userFollowed: id });
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
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SECTIONS', e);
    }
});
exports.getFolloweds = getFolloweds;
const getOneFollower = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Follower = new dinamic_services_1.DinamicServices(follower_1.default);
        const response = yield Follower.getOne(id);
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
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SECTIONS', e);
    }
});
exports.getOneFollower = getOneFollower;
const insertFollower = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userFollowed, userFollower } = body;
        const Follower = new dinamic_services_1.DinamicServices(follower_1.default);
        const follow = yield Follower.findByParams({
            userFollowed,
            userFollower,
        });
        if (Array.isArray(follow) && (follow === null || follow === void 0 ? void 0 : follow.length) > 0) {
            return res.status(400).json({
                msg: 'Ya eres seguidor de este usuario',
            });
        }
        const response = yield Follower.insert(body);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SECTIONS', e);
    }
});
exports.insertFollower = insertFollower;
const updateFollower = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return;
        const data = req === null || req === void 0 ? void 0 : req.body;
        const Follower = new dinamic_services_1.DinamicServices(follower_1.default);
        const response = yield Follower.update(id, data);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SECTIONS', e);
    }
});
exports.updateFollower = updateFollower;
const deleteFollower = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Follower = new dinamic_services_1.DinamicServices(follower_1.default);
        const response = yield Follower.delete(id);
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
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SECTIONS', e);
    }
});
exports.deleteFollower = deleteFollower;
