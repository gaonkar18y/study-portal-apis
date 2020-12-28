import { insertUser, getUserByEmail, getUserByEmailPass } from '../db/users';
import jwt from 'jsonwebtoken';

export const SingIn = (req,res, next) => {
    console.log('/login req body=', req.body);
    const username = req.body.username;
    const password =  req.body.password;
    getUserByEmailPass(username, password).then((result)=>{
        console.log(result);
        if ( result.rows.length === 1 ) {
            const token = jwt.sign( { userDetails: result.rows[0] }, 'codemaster123');
            res.status(200).send({
                token: token
            });
        } else {
            res.statusCode = 400;
            res.send({
                message:'Invalid username or password'
            })
        }
        
    }).catch( err => {
        console.log('Error in selecting user', err);
        res.status(500).send({
            message:'Internal server error'
        })
    })
}

export const SingUp = async (req, res, next) => {
    const password = req.body.password;
    const role = req.body.role;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    try {
        const result = await getUserByEmail(email);
        if (result.rows.length === 1) {
            res.statusCode = 400;
            res.send({ message: 'Email already exits' })
        } else {
            const insertResult = await insertUser(email, firstName, lastName, password, role);
            console.log('user inserted', insertResult);
            res.status(201).send({ message: 'SignUp Successful' })
        }
    } catch (err) {
        console.log('Error in inserting user', err);
        res.status(500).send({
            message: 'Internal server error'
        })
    }
}