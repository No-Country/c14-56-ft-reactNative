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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const DB_URI = process.env.DB_URI;
            yield (0, mongoose_1.connect)(DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const db = mongoose_1.connection;
            db.on('error', console.error.bind(console, 'connection error: '));
            db.once('open', function () {
                console.log('Connected successfully');
            });
        }
        catch (error) {
            console.error('Error! \n Error Database connected:', error);
            throw error;
        }
    });
}
exports.default = connectToDB;
