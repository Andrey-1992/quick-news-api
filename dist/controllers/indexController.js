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
exports.storeNews = exports.getSavedNews = void 0;
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
    // console.log(req.body)
    const { abstract, byline, title, multimediaurl, multimediacaption, urlink, section } = req.body;
    console.log(abstract, byline, title, multimediaurl, multimediacaption, urlink, section);
    return res.send('recived');
    // try {
    //   const response: QueryResult = await pool.query('SELECT * FROM savednews');
    //   return res.status(200).json(response.rows);
    // } 
    // catch(e) {
    //   console.log(e);
    //   return res.status(500).json('Internal Server Error')
    // } 
});
exports.storeNews = storeNews;
// export const deleteNews = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const response: QueryResult = await pool.query('SELECT * FROM savednews');
//     return res.status(200).json(response.rows);
//   } 
//   catch(e) {
//     console.log(e);
//     return res.status(500).json('Internal Server Error')
//   } 
// }
