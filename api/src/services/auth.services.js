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
exports.Auth = void 0;
const user_1 = __importDefault(require("../models/schema/user"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
class Auth {
    loginUser({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.findOne({ email });
                if (!user)
                    return 'NOT_FOUND_USER';
                const jwt = new jwt_handle_1.JWT(email);
                if (!user)
                    return 'Email or password are invalid';
                const token = jwt.generateToke();
                const passwordHash = user === null || user === void 0 ? void 0 : user.password;
                const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
                return isCorrect ? { token, user } : 'INVALID_PASSWORD';
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.Auth = Auth;
