const express = require("express")
const app = express()
const path = require("path")

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static((path.join(__dirname,'public'))))

app.get('/', (req, res)=>{
    res.send("Está funcionando!")
})
app.get('/sobre', (req, res)=>{
    res.render("sobre")
})

app.listen(2007, "192.168.15.5", ()=>{
    console.log("Funcionando")
})