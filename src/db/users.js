import db from './index';

export const insertUser = (email,firstname,lastname,pass,userrole='student') => {
    return db.query('INSERT INTO users(email, firstname, lastname, pass, userrole) values($1, $2, $3, $4, $5)',
    [email,firstname,lastname,pass,userrole])
}

export const getUserById = (id) => {
    return db.query('SELECT * FROM users WHERE id =$1',[id])
}

export const getUserByEmail= (email) => {
    return db.query('SELECT * FROM users WHERE email =$1',[email])
}

export const getUserByEmailPass= (email, pass) => {
    return db.query('SELECT * FROM users WHERE email =$1 AND pass =$2',[email, pass])
}