
import app from './appConfig';

import {
    users, courses
} from './study_portal_data';


app.post('/login',(req,res)=>{
    let username = req.body.username;
    let password =  req.body.password;
    let user = users.find( u => u.username === username && u.password === password);
    if ( user ) {
        res.send(user);
    } else {
        res.statusCode = 400;
        res.send({
            message:'Invalid username or password'
        })
    }
})


app.post('/register',(req,res)=>{
    let username = req.body.username;
    let password =  req.body.password;
    let role = req.body.role;
    let email =  req.body.email;
    let name = req.body.name;

    let user = users.find( u => u.username === username );
    if ( user ) {
        res.statusCode = 400;
        res.send({
            message:'Username already exits'
        })
    } else {
        users.push({
            username,
            password,
            name,
            role,
            email
        })
        res.send({
            message:'Registered Successfully'
        })
    }
})

app.get('/course',(req,res)=>{
    let courseId = parseInt(req.query.courseId);
    let teacher = req.query.teacher;
    if ( courseId && teacher ) {
        let courseList = courses.filter( c => c.courseId === courseId && c.teacher === teacher );
        res.send(courseList);
    } else if ( courseId ) {
        let courseList = courses.filter( c => c.courseId === courseId );
        res.send(courseList);
    } else if ( teacher ) {
        let courseList = courses.filter( c => c.teacher === teacher );
        res.send(courseList);
    } else {
        res.send(courses);
    }
   
})


export default app;