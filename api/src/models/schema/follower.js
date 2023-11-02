"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FollowerSchema = new mongoose_1.Schema({
    userFollower: {
        type: String,
        required: true,
    },
    userFollowed: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const FollowerModel = (0, mongoose_1.model)('followers', FollowerSchema, 'follower');
exports.default = FollowerModel;
