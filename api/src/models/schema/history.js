"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    path: {
        type: Object,
        required: true,
        default: {
            path: 'https://res.cloudinary.com/dxbnpkfiw/image/upload/v1697654047/default/653004793a350c09e7358b7d/blnoaxqhs0rtli6gwdhw.svg',
            public_id: 'default/653004793a350c09e7358b7d/blnoaxqhs0rtli6gwdhw',
            tag: 'default',
            format: 'svg',
        },
    },
    userId: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 1,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const HistoryModel = (0, mongoose_1.model)('histories', UserSchema, 'history');
exports.default = HistoryModel;
