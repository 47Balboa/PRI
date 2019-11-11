const mongoose = require('mongoose')


var filmeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    year: {type: String, required: true},
    cast: Array,
    genres: Array
  });

module.exports = mongoose.model('filmes', filmeSchema)
