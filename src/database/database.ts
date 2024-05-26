import * as dotenv from 'dotenv';
dotenv.config();

import mysql from 'promise-mysql';

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306', 10),
});

const pool = connection.then((value) => {
    console.log('Connected to database');
    return value;
});

export default pool;