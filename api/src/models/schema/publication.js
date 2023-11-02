"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PublicationSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        default: {
            path: '',
            public_id: '',
            tag: 'default',
            format: '',
        },
    },
    status: {
        type: Number,
        default: 1,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const PublicationModel = (0, mongoose_1.model)('publications', PublicationSchema, 'publication');
exports.default = PublicationModel;
