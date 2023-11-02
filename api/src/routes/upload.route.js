"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const upload_controller_1 = require("../controllers/upload.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/:collection/:id', upload_controller_1.updatedImage);
router.delete('/:public_id', upload_controller_1.deleteImage);
