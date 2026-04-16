
const express= require('express')

// expres app

const app= express()

// register view 


app.set('view engnine', 'ejs')

// listener for request
app.listen(3000)

app.get('/',(req, res)=>{

       res.render('index',{title:'Home'})
})

app.get('/about',(req, res)=>{
    res.render('about',{title:'about'})
})

app.get('/blogs/create',(req,res)=>{

    res.render('create',{title:'Create a new Blog'})
})


app.use((req,res)=>{
    res.status(404).render(404,{title:'404'})
})


