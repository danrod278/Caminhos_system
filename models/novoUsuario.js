const mongoose = require('mongoose')
const Schema = mongoose.Schema


const novoUsuario = new Schema({
    _id:String,
    username:String,
    password:String,
    type:String,
    firstAcess:Boolean
})

const Usuarios = mongoose.model("usuarios", novoUsuario)

exports.Usuarios = Usuarios