import mysql from 'promise-mysql';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '991223',
    database: 'streaming',
    port: 3306,
});

const pool = connection.then((value) => {
    console.log('Connected to database');
    return value;
});

export default pool;

