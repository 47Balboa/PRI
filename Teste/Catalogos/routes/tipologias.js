var express = require('express');
var router = express.Router();
const axios = require('axios');

/*GET films listing */
router.get('/tipologias', function(req, res ,next){
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias')
        .then(dados =>{
            res.render('lista-tipologias',{lista:dados.data})
 })
        .catch(erro =>{
            res.render('error', {error:erro})
        })
})



router.get('/:idTipologia',function(req, res, next){
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/:idTipologia/elementos' + req.params.idCatalogo)
        .then(dados =>{
            res.render('informacao-tipologia',{tipologia:dados.data})
        })
        .catch(erro =>{
            res.render('error', {error:erro})
        })
})



module.exports = router;
