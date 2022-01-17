"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = __importStar(require("cors"));
const app = (0, express_1.default)();
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
app.locals.title = 'Quick News Server';
// app.set('port', process.env.DB_PORT || 3000);
const port = process.env.PORT || 4000;
const options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: API_URL,
    preflightContinue: false,
};
app.use(express_1.default.json());
app.use(cors());
app.use(indexRoutes_1.default);
app.get('/', (req, res) => {
    res.status(200).send(`You've reached the ${app.locals.title} API `);
});
app.listen(port, "0.0.0.0", () => {
    console.log(`${app.locals.title} is running on port: ${app.get('port')}`);
});
