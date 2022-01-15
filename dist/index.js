"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
app.locals.title = 'Quick News Server';
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(indexRoutes_1.default);
app.get('/', (req, res) => {
    res.status(200).send(`You've reached the ${app.locals.title} API `);
});
app.listen(3000, () => {
    console.log(`${app.locals.title} is running on port: ${app.get('port')}`);
});
