const novoUsuario = require("../models/novoUsuario")
const Usuarios = novoUsuario.Usuarios
const conexao = require("../DB/connectionAtlas")
const connect = conexao.connect

async function testa_acesso(usernamep, passwordp){
    try{
        const pessoas = await Usuarios.find({username:usernamep, password:passwordp})
        console.log(usernamep, passwordp)
        console.log(pessoas)
        if(pessoas.length===0){
            return [false]
        }else{
            return [true, ""+pessoas[0]._id+"", pessoas[0].type]
        }
        
    }catch(err){
        console.log(err) 
    }
} 




module.exports = {testa_acesso}

connect()

