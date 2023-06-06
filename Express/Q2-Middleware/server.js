const express = require('express');
const app = express();

// middleware
app.use(logger)

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.get('/users', auth, (req, res)=>{
    res.send('Users Page')
})

function logger(req, res, next){
    // middle ware function
    next()
}

function auth(req, res, next){
    // authentication middleware functions
   if(req.squery.admin === 'true'){
    next()
    return
   }else{
    res.send('Only admin is allowed')
   }
    next()
}
app.listen(3000)