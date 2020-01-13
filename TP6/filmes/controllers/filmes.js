var Filme = require('../models/filmes')
var ObjectId = require('mongodb').ObjectID

// Devolve a lista de filmes
module.exports.listar = () => {
    return Filme
        .find()
        .exec()
}

/*
module.exports.consultar = id => {
    return Filme
        .findOne(ObjectId(id))
        .exec()
}

*/
module.exports.consultar = ident => {
    return Filme
            .findOne({_id:ident})
            .exec()
}

module.exports.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

module.exports.inserir = filme => {
    var novo = new Filme(filme)
    return novo.save()
               
}

module.exports.remover = id =>{
    return Filme
        .deleteOne({_id:id})
        .exec()
}

