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
exports.deleteNews = exports.storeNews = exports.getSavedNews = void 0;
const databasePool_1 = require("../databasePool");
const getSavedNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield databasePool_1.pool.query('SELECT * FROM savednews');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getSavedNews = getSavedNews;
const storeNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { abstract, byline, title, multimediaurl, multimediacaption, urlink, section } = req.body;
        const response = yield databasePool_1.pool.query('INSERT INTO savednews (abstract, byline, title, multimediaurl, multimediacaption, urlink, section) VALUES ($1, $2, $3, $4, $5, $6, $7)', [abstract, byline, title, multimediaurl, multimediacaption, urlink, section]);
        return res.status(200).json({
            message: 'This News have been store successfully!',
            body: {
                abstract,
                byline,
                title,
                multimediaurl,
                multimediacaption,
                urlink,
                section
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.storeNews = storeNews;
const deleteNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield databasePool_1.pool.query('DELETE FROM savednews WHERE id = $1', [id]);
        return res.status(200).json(`News Successfully deleted with ID: ${id}`);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.deleteNews = deleteNews;
