const express = require("express")
const app = express()
const path = require("path") 
const bodyParser = require("body-parser");
const funcoes = require('./funcoes.js');
const rateLimit = require('express-rate-limit')


const limite = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10
})



app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static((path.join(__dirname,'public'))))
app.use(bodyParser.urlencoded({extended:true}))
//app.use(limite)



app.get('/', (req, res)=>{
    res.render("login")
})



app.post('/conferir', (req, res)=>{

    let dados_form=req.body
    console.log(dados_form)
    async function acesso(){
        const acess = await funcoes.verificador_login("nomecolecao", dados_form)
        console.log(acess)
        if(acess[0]){
            res.redirect(`/inicial/${acess[1]}`)
        }else{
            res.redirect('/')
        }
    }
    acesso()
    
     
})



app.get('/inicial/:id',(req, res)=>{
    const userId = req.params.id
    async function renderOrNot(){
        const acesso = await  funcoes.verificar_id(userId)
        if(acesso){
            console.log("Acesso liberado")
            res.send("ok")
        }else{
           
            res.redirect("/")
        }
    }
    renderOrNot()
})



const port = 202
app.listen(port, "192.168.15.11", ()=>{
    console.log(`Funcionando; Porta: http://192.168.15.11:${port}`)
})

