import mysql from 'mysql';
/*
    Always Data
    host: 'mysql-fgt.alwaysdata.net',
    user: 'fgt',
    password: '3012006E$',
    database: 'fgt_tesis',
*/

export const connection = mysql.createPool({
    host: 'mysql-fgt.alwaysdata.net',
    user: 'fgt',
    password: '3012006E$',
    database: 'fgt_tesis',
});

/*
    Localhost
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tesis',
*/