const express = require("express")
require("dotenv/config")
const app = express()
const path = require("path") 
const bodyParser = require("body-parser");
const authentication = require('./repositorys/authentication');
const creator = require("./repositorys/creator")
const rateLimit = require('express-rate-limit');
const { render } = require("ejs");
const sessions = require("express-session")

const limite = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10
})

app.use(
    sessions({
        secret:process.env.SECRET,
        resave:true,
        saveUninitialized:true
}))
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static((path.join(__dirname,'public'))))
app.use(bodyParser.urlencoded({extended:true}))
//app.use(limite)

const verificaAutenticacao = (req, res, next)=>{
    if(req.session.user){
        next()
    }
    else{
        res.redirect("/login")
    }
}



app.get('/', verificaAutenticacao,(req, res)=>{

    if(req.session.user.type=="aluno"){
        res.render("aluno")
    }else if(req.session.user.type=="professor"){
        res.render("professor")
    }else if(req.session.user.type=="adm"){
        res.render("admin")
    }
    
})

app.get('/login', (req, res)=>{
    res.render("login")
})

app.post('/login',(req, res)=>{
    const {username, password} = req.body
    
    async function acesso(){    
        const acesso= await authentication.testa_acesso(username, password)
        if(acesso[0]==true){
            req.session.user={
                id:acesso[1],
                username:username,
                type:acesso[2]
            } 
            res.redirect("/")
        }else{
            res.redirect('/login')
        }/**/
    }
    acesso()
    
})
                                                                                                                                                                                                                                                                                                                                                            
app.get('/teste', verificaAutenticacao, (req, res)=>{
    res.render("teste")
})
app.post("/verifica_teste", verificaAutenticacao, (req, res)=>{
    res.send(req.body)
    creator.add_aluno(req.body)
})

const port = 2000
const ip="192.168.4.78"
app.listen(port, `${ip}`, ()=>{
    console.log(`Funcionando; Porta: https://${ip}:${port}`)
})
