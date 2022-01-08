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
    // console.log(abstract,
    //   byline,
    //   title,
    //   multimediaurl,
    //   multimediacaption,
    //   urlink,
    //   section);
    databasePool_1.pool.query('INSERT INTO savednews (abstract, byline, title, multimediaurl, multimediacaption, urlink, section) VALUES ($1, $2, $3, $4, $5, $6, $7)', [abstract, byline, title, multimediaurl, multimediacaption, urlink, section]);
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
// {
//   "abstract": "Some activists called the agreement in Glasgow disappointing, but it established a clear consensus that all countries need to do much more.",
//   "byline": "By Brad Plumer and Lisa Friedman",
//   "title": "Negotiators Strike a Climate Deal, but World Remains Far From Limiting Warming",
//   "multimediaurl": "https://static01.nyt.com/images/2021/11/13/multimedia/13cli-cop26-final-group02/13cli-cop26-final-group02-superJumbo.jpg",
//   "multimediacaption": "Weston McKennie, center, with Tyler Adams and Christian Pulisic after McKennie’s goal doubled the Americans’ lead in the 85th minute."
//   "urlink": "https://www.nytimes.com/2021/11/13/climate/cop26-glasgow-climate-agreement.html",
//   "section": "climate",
// }
