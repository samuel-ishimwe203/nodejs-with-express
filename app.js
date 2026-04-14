
const express= require('express')

// expres app

const app= express()

// register view 


app.set('view engine', 'ejs')

// listener for request
app.listen(3000)

app.get('/',(req, res)=>{

       res.render('index')
})

app.get('/about',(req, res)=>{
    res.render('about')
})

// redirects

app.get('/about-us',(req,res)=>{
    res.redirect('about')
})

app.use((req,res)=>{
    res.status(404).render(404)
})


