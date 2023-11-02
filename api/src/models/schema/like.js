"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LikeSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    publicationId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const LikeModel = (0, mongoose_1.model)('likes', LikeSchema, 'like');
exports.default = LikeModel;
