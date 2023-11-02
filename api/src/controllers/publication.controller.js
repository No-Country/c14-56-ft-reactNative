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
exports.deletePublication = exports.updatePublication = exports.insertPublication = exports.getPublications = exports.getOnePublication = exports.getOwnPublications = void 0;
const dinamic_services_1 = require("../services/dinamic.services");
const publication_1 = __importDefault(require("../models/schema/publication"));
const error_handle_1 = require("../utils/error.handle");
const upload_services_1 = require("../services/upload.services");
const getPublications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const Publication = new dinamic_services_1.DinamicServices(publication_1.default);
        const response = yield Publication.findByParams({ userId: { $ne: id } }, page, limit);
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
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_POST', e);
    }
});
exports.getPublications = getPublications;
const getOwnPublications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const Publication = new dinamic_services_1.DinamicServices(publication_1.default);
        const response = yield Publication.findByParams({ userId: id }, page, limit);
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
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_POST', e);
    }
});
exports.getOwnPublications = getOwnPublications;
const getOnePublication = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Publication = new dinamic_services_1.DinamicServices(publication_1.default);
        const response = yield Publication.getOne(id);
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
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_POST', e);
    }
});
exports.getOnePublication = getOnePublication;
const insertPublication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collection, id } = req.params;
        const { description } = req.body;
        const Publication = new dinamic_services_1.DinamicServices(publication_1.default);
        if (req.files) {
            const { image } = req.files;
            const FileUpload = new upload_services_1.Upload(collection, id);
            if (!Array.isArray(image)) {
                const { public_id, secure_url, format } = yield FileUpload.singleUpload(image);
                const post = {
                    userId: id,
                    description,
                    image: {
                        path: secure_url,
                        public_id: public_id,
                        tag: collection,
                        format,
                    },
                };
                const response = yield Publication.insert(post);
                if (!response) {
                    res.status(401).json({ msg: 'Sorry, something went wrong' });
                }
                res.send(response);
            }
            else
                res
                    .status(400)
                    .json({ msg: 'Only one image can be upload on this service' });
        }
        const post = {
            userId: id,
            description,
            image: {
                path: 'none',
                public_id: '',
                tag: '',
                format: '',
            },
        };
        const response = yield Publication.insert(post);
        if (!response) {
            res.status(401).json({ msg: 'Sorry, something went wrong' });
        }
        res.send(response);
    }
    catch (e) {
        console.error({ e });
    }
});
exports.insertPublication = insertPublication;
const updatePublication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return;
        const data = req === null || req === void 0 ? void 0 : req.body;
        const Publication = new dinamic_services_1.DinamicServices(publication_1.default);
        const response = yield Publication.update(id, data);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_POST', e);
    }
});
exports.updatePublication = updatePublication;
const deletePublication = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const Publication = new dinamic_services_1.DinamicServices(publication_1.default);
        const response = yield Publication.delete(id);
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
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_POST', e);
    }
});
exports.deletePublication = deletePublication;
