"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JWT {
    constructor(payload) {
        this.generateToke = () => {
            return (0, jsonwebtoken_1.sign)({ email: this.payload }, this.jwtSecret, { expiresIn: '1h' });
        };
        this.verifyToken = (token) => {
            return (0, jsonwebtoken_1.verify)(token, this.jwtSecret);
        };
        this.jwtSecret = `${process.env.JWT_SECRET}`;
        this.payload = payload || '';
    }
}
exports.JWT = JWT;
