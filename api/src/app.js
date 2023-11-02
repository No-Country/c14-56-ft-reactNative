"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const mongo_1 = __importDefault(require("./config/mongo"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3002;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
}));
app.use(routes_1.router);
// DB Connection
(0, mongo_1.default)().then(() => console.log('DB Connection is ready'));
app.listen(port, () => {
    console.log('Listen on the port:', port);
});
