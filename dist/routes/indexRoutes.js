"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const indexController_1 = require("../controllers/indexController");
router.get('/saved-news', indexController_1.getSavedNews);
router.post('/saved-news', indexController_1.storeNews);
router.delete('/saved-news/:id', indexController_1.deleteNews);
exports.default = router;
