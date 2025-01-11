import mysql from 'mysql';

export const db = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user:  'root',
        password: 'password',
        database: 'social'
    });
}
