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
exports.deleteImage = exports.updatedImage = void 0;
const dinamic_services_1 = require("../services/dinamic.services");
const upload_services_1 = require("../services/upload.services");
const user_1 = __importDefault(require("../models/schema/user"));
const history_1 = __importDefault(require("../models/schema/history"));
const removeTagValidation = ['profile'];
const multiUploadValidation = ['history'];
const updatedImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, collection } = req.params;
        const User = new dinamic_services_1.DinamicServices(user_1.default);
        const History = new dinamic_services_1.DinamicServices(history_1.default);
        const FileUpload = new upload_services_1.Upload(collection, id);
        // Validation
        if (!req.files || !req.files.file) {
            return res
                .status(400)
                .send('No files were uploaded or upload a valid extension.');
        }
        const file = req.files.file;
        // Get the user model
        let model;
        model = yield User.getOne(id);
        if (!model) {
            return res.status(400).json({
                msg: `Don't exist any User with this ID: ${id}`,
            });
        }
        // Implementation
        const { photoProfile } = model;
        if (Array.isArray(file)) {
            if (!multiUploadValidation.includes(collection)) {
                console.error('This functionality is only to history tags');
                res.status(400).json({ msg: 'Multiupload is only to history services' });
            }
            const filesArray = yield FileUpload.multiUpload(file);
            const response = [];
            for (const data of filesArray) {
                const { public_id, secure_url, format } = data;
                const history = yield History.insert({
                    path: {
                        path: secure_url,
                        public_id: public_id,
                        tag: collection,
                        format,
                    },
                    userId: id,
                });
                if (!history) {
                    throw new Error('Something went wrong during the upload');
                }
                response.push(history);
            }
            res.status(200).json({ msg: 'Successful', data: response });
        }
        else {
            const { public_id, secure_url, format } = yield FileUpload.singleUpload(file);
            let response;
            switch (collection) {
                case 'profile':
                    yield FileUpload.deleteFile(photoProfile.public_id, photoProfile.tag);
                    response = yield User.update(id, {
                        photoProfile: {
                            path: secure_url,
                            public_id: public_id,
                            tag: collection,
                            format,
                        },
                    });
                    if (!response) {
                        throw new Error('Something went wrong during the upload');
                    }
                    break;
                case 'history':
                    response = yield History.insert({
                        path: {
                            path: secure_url,
                            public_id: public_id,
                            tag: collection,
                            format,
                        },
                        userId: id,
                    });
                    if (!response) {
                        throw new Error('Something went wrong during the upload');
                    }
                    break;
                default:
                    break;
            }
            res.status(200).json({ msg: 'Successful', data: response });
        }
    }
    catch (e) {
        console.error(e);
    }
});
exports.updatedImage = updatedImage;
const deleteImage = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { public_id } = params;
        const FileUpload = new upload_services_1.Upload('none', public_id);
        const response = yield FileUpload.deleteFile(public_id, 'none');
        res.status(200).json({ msg: 'Successful', data: response });
    }
    catch (e) {
        console.error(e);
        res.status(400).json({ msg: 'Something Failed, please try again' });
    }
});
exports.deleteImage = deleteImage;
