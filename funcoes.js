const {MongoClient} = require("mongodb")
const mongoose = require("mongoose")
const Schema  = mongoose.Schema
const url_database = 'mongodb://localhost:27017/teste05' 
const client = new MongoClient(url_database,{useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect(url_database, {useNewUrlParser:true, useUnifiedTopology:true})
//Models
const novoUsuario = new Schema({
    username:String,
    password:String
})

const Usuarios = mongoose.model("Usuarios", novoUsuario)

async function testa_acesso(usernamep, passwordp){
    try{
        const pessoas = await Usuarios.find({username:usernamep, password:passwordp})
        
        if(pessoas.length===0){
            return [false]
        }else{
            return [true, ""+pessoas[0]._id+""]
        }
         
    }catch(err){
        console.log(err) 
    }
} 



module.exports = {testa_acesso}

