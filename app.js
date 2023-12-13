const express = require("express")
const app = express()
const path = require("path") 
const bodyParser = require("body-parser");
const funcoes = require('./controller.js');
const rateLimit = require('express-rate-limit');
const { render } = require("ejs");
const sessions = require("express-session")
const https = require('https')
const fs = require("fs")

const limite = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10
})

app.use(
    sessions({
        secret:"$$$albert15promax$$$",
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
        const acesso= await funcoes.testa_acesso(username, password)
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
    funcoes.add_aluno(req.body)
})

const port = 202
app.listen(port, "192.168.15.11", ()=>{
    console.log(`Funcionando; Porta: https://192.168.15.11:${port}`)
})
