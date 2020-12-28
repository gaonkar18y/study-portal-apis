import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    password: 'apiadmin123',
    database:'studypro',
    user: 'webapiadmin',
    max: 20
})

export default pool;

export const query = ( queryString, valuesArray ) => pool.query(queryString, valuesArray);