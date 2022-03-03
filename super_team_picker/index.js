const express = require('express')
const app = express()
const knex = require('./db/client')
const methodOverride = require('method-override')

const logger = require('morgan')
app.use(logger('dev'))

const path = require('path')
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.urlencoded({extended: true})) // urlParser req.body

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method){
        const method = req.body._method;
        return method
    }
}))

app.get("/cohorts",(req,res)=>{
    knex('cohorts')
    .orderBy('created_at', 'desc')
    .then(cohorts=>{
        res.render('cohorts',{cohorts: cohorts})
    })
})

app.get("/cohorts/new",(req,res)=>{
    res.render('new_cohort',{cohort: undefined})
})

app.get('/cohorts/:id/edit', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(cohort => {
        res.render('new_cohort', {cohort: cohort})
    })
})
app.patch('/cohorts/:id', (req, res) => {
    console.log(req.body.name);
    knex('cohorts')
    .where('id', req.params.id)
    .update({
        name: req.body.name,
        logoUrl: req.body.logoUrl,
        members: req.body.members
    })
    .then(() => {
        console.log(req.body.name);
        res.redirect(`/cohorts/${req.params.id}`)
    })
})

app.delete('/cohorts/:id', (req, res) => {
    console.log();
    knex('cohorts')
    .where('id', req.params.id)
    .del()
    .then(() => {
        console.log(req.body.name);
        res.redirect('/cohorts')
    })
}) 

app.get("/cohorts/:id",(req,res)=>{

    knex('cohorts').where('id',req.params.id)
    .first() // doesn't actually need but just to show that we can
    .then(cohort=>{
        if(!cohort){
            res.send('no cohort found')
        }else{
            if(req.query.input){
                let count = parseInt(req.query.quantity)
                let result = []
                let arr = cohort.members.split(',')
                if(req.query.input == "numberPerCount"){
                    let chunk = count;
                    for (i = 0; i < arr.length; i += chunk){
                        result.push(arr.slice(i, i + chunk).join(','))
                    }
                }else if(req.query.input == "teamCount"){
                    let chunk = 0
                    if (arr.length%2 == 0){
                        chunk = Math.floor(arr.length/count);
                    }else{
                        chunk = Math.floor(arr.length/count)+1;
                    }
                    for (i = 0; i < arr.length; i += chunk){
                        result.push(arr.slice(i, i + chunk).join(','))
                    }      
                }
                res.render('show_cohort',{cohort: cohort, result: result})
            }else{
                res.render('show_cohort',{cohort: cohort, result: undefined}) 
            }
        }
    })
})

app.post("/cohorts",(req,res)=>{
    knex('cohorts').insert({
        name: req.body.name,
        logoUrl: req.body.logoUrl,
        members: req.body.members
    })
    .returning('*')
    .then(cohorts=>{
        last_cohort = cohorts[0]
        res.redirect(`/cohorts/${last_cohort.id}`)
    })
})

const PORT = 2200;
const DOMAIN = "localhost"


app.listen(PORT, DOMAIN, ()=> {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})