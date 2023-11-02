"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySession = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const verifySession = (req, res, next) => {
    try {
        const jwt = new jwt_handle_1.JWT();
        const bearer = req.headers.authorization;
        const reqJWT = bearer === null || bearer === void 0 ? void 0 : bearer.split(' ').pop();
        const isValid = jwt.verifyToken(`${reqJWT}`);
        if (!isValid) {
            res.status(401);
            res.send('NO_TIENES_UN_JWT_VALIDO');
        }
        else {
            req.user = isValid;
            next();
        }
    }
    catch (e) {
        console.error({ e });
        res.status(400);
        res.send('SESSION_NO_VALIDAD');
    }
};
exports.verifySession = verifySession;
