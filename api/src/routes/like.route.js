"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const like_controller_1 = require("../controllers/like.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/:publication/:id', like_controller_1.getLikes);
router.post('/:publication/:id', like_controller_1.insertLike);
router.delete('/:id', like_controller_1.deleteLike);
