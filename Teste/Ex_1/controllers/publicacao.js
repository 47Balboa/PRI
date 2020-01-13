var Publicacao = require('../models/publicacao')
var ObjectId = require('mongodb').ObjectID


//Devolve a lista de publicações apenas com os campos "id", "title", "year" e "type"

module.exports.listarCampos = () =>{
    return Publicacao
           .aggregate([{$project:{id:true, title:true, year:true, type:true}}])
           .exec()
}

//Devolve a informação completa de uma publicação

module.exports.consultar = ident =>{
    return Publicacao
           .findOne({id:ident})
           .exec()

}

//Devolve a lista de tipos, sem repetições
module.exports.listarTipos = () =>{
    return Publicacao
           .distinct('type')
           .exec()

}
//Devolve a lista de publicações que tenham o campo "type" com o valor "YYY";
module.exports.listarTValor = tipo =>{
    return Publicacao
           .find({ type:tipo})
           .exec()

}

//Devolve a lista de publicações que tenham o campo "type" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
module.exports.listarTipoAno = (type,year) => {
    return Publicacao
        .find({type: type, year:{$gt:year} })
        .exec()
}

//Devolve uma lista ordenada alfabeticamente com os nome dos autores 
module.exports.listarAutores = () =>{
    return Publicacao
            .aggregate([{$unwind: "$authors"},{$group: {_id: "$authors"}},{$sort: {_id: 1}}])
            .exec()
}

module.exports.listarAutorPub = a =>{
    return Publicacao
            .aggregate([{$unwind: "$authors"},{$match: {authors: a}}])
            .exec()
}

