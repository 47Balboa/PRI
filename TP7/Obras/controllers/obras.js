var Obra = require('../models/obras')
var ObjectId = require('mongodb').ObjectID
var mongoose = require('mongoose')

// Devolve a lista de obras
module.exports.listar = () => {
    return Obra
            .find()
            .exec()
}
module.exports.listComp = () =>{
    return Obra
            .distinct('compositor')
            .exec()
}

module.exports.consultar = ident => {
    return Obra
            .findOne({id:ident})
            .exec()
}

module.exports.listPer = per =>{
    return Obra   
            .find({periodo: per})
            .exec()
}

module.exports.listAno = ano =>{
    return Obra   
            .find({anoCriacao: ano})
}

module.exports.listObComp = comp => {
    return Obra
            .find({compositor:comp})
            .exec()
}
