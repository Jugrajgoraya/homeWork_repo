const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

const path = require('path')
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get("/",(req,res)=>{
    res.render('home_page')
})

const PORT = 2200;
const DOMAIN = "localhost"

app.listen(PORT, DOMAIN, ()=> {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})