"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    publicationId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const CommentModel = (0, mongoose_1.model)('comments', CommentSchema, 'comment');
exports.default = CommentModel;
