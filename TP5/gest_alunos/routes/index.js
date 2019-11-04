var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + "/../data/alunos.json"

/* GET home page. */

router.get('/alunos', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('index.pug', {lista: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.get('/alunos/:idAluno', function(req,res){
  var id = req.params.idAluno
    jsonfile.readFile(myBD, (erro, alunos) => {
      if(!erro){
        var index = alunos.findIndex(c => c.id == id)
        if(index > -1){
           var al = alunos[index]
           res.render('informacoes.pug', { aluno: al , notas: al.notas})
        }
        else{
          res.render('error', { error: erro })
        }
      }
      else{
        res.render('error', { error: erro })
      }

    })
})
router.post('/alunos', function(req, res) {
    var registo = req.body
    //registo['id'] = nanoid()
    registo['notas'] = []
    jsonfile.readFile(myBD, (erro, alunos)=>{
        if(!erro){
            alunos.push(registo)
            jsonfile.writeFile(myBD, alunos, erro => {
                if(erro) console.log(erro)
                else console.log('Registo gravado com sucesso.')
            })
        }
        res.render('index', {lista: alunos})
    })
})

router.post('/alunos/:idAluno/notas', function(req,res){
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro, alunos)=>{
    if(!erro){
      var index = alunos.findIndex(c => c.id ==id)
      if(index>1){
        var nota = req.body
        var aluno = alunos[index]
        aluno.notas.push(nota)
        jsonfile.writeFile(myBD, alunos, erro =>{
          if(erro) console.log(erro)
          else console.log('Nota registada com sucesso')
        })
        res.redirect('/alunos/' + id)
        }
    }
    else{
      res.render('error', { error: erro })
    }  
  })

})


