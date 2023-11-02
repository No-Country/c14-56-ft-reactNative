"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const cloudinary_1 = require("cloudinary");
class Upload {
    constructor(collection, idUser, validExpension = ['png', 'jpg', 'jpeg', 'gif', 'webp'], invalidTag = ['default']) {
        this.collection = collection;
        this.idUser = idUser;
        this.validExpension = validExpension;
        this.invalidTag = invalidTag;
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET,
        });
    }
    singleUpload(file) {
        return new Promise((resolve, reject) => {
            const extension = file.name.split('.').pop();
            if (!this.validExpension.includes(`${extension}`))
                return reject(`The extension ${extension} isn't valid. Please use this extension: ${this.validExpension}`);
            const result = cloudinary_1.v2.uploader.upload(file.tempFilePath, {
                folder: `${this.idUser}/${this.collection}`,
            });
            if (!result)
                reject('Error! Sometimes wrong happening on the Upload.');
            resolve(result);
        });
    }
    multiUpload(files) {
        const uploadPromises = files.map(file => this.singleUpload(file));
        return Promise.all(uploadPromises)
            .then(responses => {
            // responses contendrá un array con las respuestas de las subcargas individuales.
            return responses;
        })
            .catch(error => {
            // Maneja los errores si alguna de las subcargas falla.
            throw error;
        });
    }
    deleteFile(id, tag) {
        return new Promise((resolve, reject) => {
            if (this.invalidTag.includes(tag))
                resolve("This type of file can't be removed it");
            const result = cloudinary_1.v2.uploader.destroy(id);
            if (!{ result })
                reject('Sometimes wrong happening in the process');
            resolve(result);
        });
    }
}
exports.Upload = Upload;
