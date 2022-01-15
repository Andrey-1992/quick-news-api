"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
require('dotenv').config();
const isProduction = process.env.NODE_ENV === 'production';
exports.pool = new pg_1.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false,
    }
});
