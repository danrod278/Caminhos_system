const express = require("express")
const app = express()
const path = require("path") 
const bodyParser = require("body-parser");
const funcoes = require('./funcoes.js');


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static((path.join(__dirname,'public'))))
app.use(bodyParser.urlencoded({extended:true}))

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
            res.redirect(`/inicial/:${acess[1]}`)
        }else{
            res.redirect('/')
        }
    }
    acesso()
    
     
})
app.get('/inicial/:id',(req, res)=>{
    const userId = req.params.id.startsWith(":") ? req.params.id.slice(1) : req.params.id
    console.log(userId)
    const acesso = funcoes.verificar_id(userId)
    console.log(acesso)
    res.send('ok')
})



const port = 202
app.listen(port, "192.168.15.11", ()=>{
    console.log(`Funcionando; Porta: http://192.168.15.11:${port}`)
})

