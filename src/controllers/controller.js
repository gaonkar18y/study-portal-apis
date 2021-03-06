
import app from '../appConfig';
import xml from 'xml';
import { courses } from '../data/study_portal_data';

import { Shops, Products, MallUsers } from '../data/online_mall_data';

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

app.post('/course',(req,res)=>{
    let title = req.body.title;
    let description =  req.body.description;
    let teacher = req.body.teacher;
    let courseId =  req.body.courseId;
   
    let course = courses.find( c => c.courseId === courseId );
    if ( course ) {
        res.statusCode = 400;
        res.send({
            message:'courseId already exits'
        })
    } else {
        courses.push({
            title,
            description,
            teacher,
            courseId
        })
        res.send({
            message:'Course added Successfully'
        })
    }
})

app.delete('/course/:id',(req,res)=>{
    let courseId = req.params.id;
    let courseIndex = courses.findIndex( c => c.courseId == courseId );
    if ( courseIndex >= 0 ) {
        res.statusCode = 200;
        courses.splice(courseIndex, 1);
        res.send({
            message:'Delete success'
        })
    } else {
        res.statusCode = 400;
        res.send({
            message:'Invalid Course Id'
        })
    }
})


// For OnlineMall

app.post('/mallUser',(req,res)=>{
    let username = req.body.username;
    let password =  req.body.password;
    let role = req.body.role;
    let name = req.body.name;

    let user = MallUsers.find( u => u.username === username );
    if ( user ) {
        res.statusCode = 400;
        res.send({
            message:'Username already exits'
        })
    } else {
        MallUsers.push({
            username,
            password,
            name,
            role
        })
        res.send({
            message:'User added Successfully'
        })
    }
})

app.post('/authenticateUser',(req,res)=>{
    let username = req.body.username;
    let password =  req.body.password;
    let user = MallUsers.find( u => u.username === username && u.password === password);
    if ( user ) {
        res.send(user);
    } else {
        res.statusCode = 400;
        res.send({
            message:'Invalid username or password'
        })
    }
})


app.get('/shop',(req,res)=>{
    res.send(Shops);
})

app.get('/shop/:id',(req,res)=>{
    let shopId = req.params.id;
    if ( shopId) {
        let shopList = Shops.filter( s => s.shopId == shopId );
        res.send(shopList);
    } else {
        res.statusCode = 400;
        res.send({
            message:'Invalid shopId Id'
        })
    }
})


app.post('/shop',(req,res)=>{
    let Name = req.body.Name;
    let Owner =  req.body.Owner;
    let Description = req.body.Description;
    let shopId =  req.body.shopId;
   
    let shop = Shops.find( s => s.shopId == shopId );
    if ( shop ) {
        res.statusCode = 400;
        res.send({
            message:'shopId already exits'
        })
    } else {
        Shops.push({
            Name,
            Owner,
            Description,
            shopId
        })
        res.send({
            message:'Shop added Successfully'
        })
    }
})


app.delete('/shop/:id',(req,res)=>{
    let shopId = req.params.id;
    let shopIndex = Shops.findIndex( s => s.shopId == shopId );
    if ( shopIndex >= 0 ) {
        res.statusCode = 200;
        Shops.splice(shopIndex, 1);
        res.send({
            message:'Delete success'
        })
    } else {
        res.statusCode = 400;
        res.send({
            message:'Invalid Shop Id'
        })
    }
})

app.get('/product',(req,res)=>{
    res.send(Products);
})

app.get('/product/:id',(req,res)=>{
    let productId = req.params.id;
    if ( productId) {
        let productList = Products.filter( p => p.productId == productId );
        res.send(productList);
    } else {
        res.statusCode = 400;
        res.send({
            message:'Invalid shopId Id'
        })
    }
})

app.post('/product',(req,res)=>{
    let Name = req.body.Name;
    let Price =  req.body.Price;
    let shops = req.body.shops;
    let productId =  req.body.productId;
   
    let product = Products.find( p => p.productId == productId );
    if ( product ) {
        res.statusCode = 400;
        res.send({
            message:'productId already exits'
        })
    } else {
        Products.push({
            Name,
            Price,
            shops,
            productId
        })
        res.send({
            message:'Product added Successfully'
        })
    }
})

app.delete('/product/:id',(req,res)=>{
    let productId = req.params.id;
    let productIndex = Products.findIndex( p => p.productId == productId );
    if ( productIndex >= 0 ) {
        res.statusCode = 200;
        Products.splice(productIndex, 1);
        res.send({
            message:'Delete success'
        })
    } else {
        res.statusCode = 400;
        res.send({
            message:'Invalid Product Id'
        })
    }
})


app.post('/admin/product',(req,res)=>{
   
    let reqData =  req.body.root;

    let respObj = {message:'Success'};

    if ( reqData.action == 'Delete' ) {
        let productId = reqData.productid;
        let productIndex = Products.findIndex( p => p.productId == productId );
        if ( productIndex >= 0 ) {
            res.statusCode = 200;
            Products.splice(productIndex, 1);
            respObj = {
                message:'Delete success'
            }
        } else {
            res.statusCode = 400;
            respObj = {
                message:'Invalid Product Id'
            }
        }
    }
    res.set('Content-Type', 'text/xml');
    res.send(xml(respObj));
    
})



export default app;