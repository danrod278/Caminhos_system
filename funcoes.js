const {MongoClient} = require("mongodb")


const url_database = 'mongodb://localhost:27017/teste05' 
const client = new MongoClient(url_database,{useNewUrlParser: true, useUnifiedTopology: true })

async function verificador_login(collection, login){
    try{
        await client.connect()
        const db = client.db()
        const resposta = await (db.collection(collection)).find().toArray()
       
        if (resposta.length>0){
            for(let contador=0;contador<=resposta.length;contador++){
                if(contador==resposta.length){
                    return false
                }
                let analista = resposta[contador]
                if(analista.username==login.username && analista.password==login.senha){
                    const retorno =[true, ''+analista._id+'']
                    return retorno   
                }
                
                
            }
        }
    }finally{
        await client.close()
       
    }
}
async function verificar_id(id){
    try{
        await client.connect()
        const db = client.db()
        const dados = await (db.collection('nomecolecao').find().toArray())
        
        if(dados.length>0){
            for(let contador=0;contador<=dados.length;contador++){
                if(contador==dados.length){
                    
                    return false
                }
                let analista = `${dados[contador]._id}`
               
                if(analista==id){
                    return true
                       
                }
                
                
                
            }
        }
    }finally{
        await client.close()
    }

}
module.exports = {verificador_login, verificar_id}

