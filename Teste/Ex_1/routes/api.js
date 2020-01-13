const express = require('express');
const router = express.Router();

var Publicacao = require('../controllers/publicacao')

/*GET: lista de pubs */
router.get('/pubs', function(req, res) {
  if(req.query.type  && req.query.year){
       Publicacao.listarTipoAno(eq.query.type,req.query.year)
           .then(dados => res.jsonp(dados))
           .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.type ){
       Publicacao.listarTipos(req.query.type)
           .then(dados => res.jsonp(dados))
           .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.autor){
      Publicacao.listarAutorPub(req.query.autor)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))

  }
  else {
       Publicacao.listarCampos()
           .then(dados => res.jsonp(dados))
           .catch(erro => res.status(500).jsonp(erro))
  }
 
})


/*GET: recupera informacao de uma publicacao */
router.get('/filmes/:idPub', function(req, res) {
  console.log(req.params.idPub);
  Publicacao.consultar(req.params.idPub)
      .then(dados => {console.log(dados);res.jsonp(dados)})
      .catch(erro => {console.log(erro); res.status(500).jsonp(erro)})
}) 

/*GET: recupera informacao de autores */
router.get('/autores', function(req, res) {
  Publicacao.listarAutores()
      .then(dados => {console.log(dados);res.jsonp(dados)})
      .catch(erro => {console.log(erro); res.status(500).jsonp(erro)})
}) 





module.exports = router