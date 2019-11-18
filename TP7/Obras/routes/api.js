var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

/* GET home page. */
router.get('/obras', function(req, res, next) {
    if(req.query.anoCriacao ){
      Obras.listAno(req.query.anoCriacao)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.periodo){
      Obras.listPer(req.query.periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.compositor){
     Obras.listObComp(req.query.compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else {
        Obras.listar()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
    }
  })
  
  router.get('/compositores/', function(req,res) {
    Obras.listComp()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores/:nome', function(req,res) {
    Obras.listObComp(req.params.nome)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;