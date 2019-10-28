var http = require('http')
var fs = require('fs')


var myserver = http.createServer(function(req,res) {
    console.log(req.method + ' ' + req.url)
    
    if(req.method == 'GET'){
        var div = req.url.split('/')
        var doc = div[div.length - 1]

        if(doc == 'doc2html.xsl'){
            fs.readFile('./data/doc2html.xsl', (erro, dados) =>{
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/xsl;charset=utf-8'})
                    res.write(dados)
                } 
                else{
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.write('Erro na leitura do xsl')
                } 
                res.end()
            })
        }
        else if (div[div.length - 2] == 'musica') {
            fs.readFile('./data/doc' + doc + '.xml', (erro, dados) =>{
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/xml;charset=utf-8'})
                    res.write(dados)
                    res.end()
                } 
                else{
                    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
                    res.end('Erro: ' + erro)
                } 
                
            })
        }
        else {
            res.end('Erro: pedido não suportado [' + req.url + ']')
        }
    }
    else {
            res.end('Erro: método não suportado [' + req.method + ']')
    }
})

myserver.listen(3333)

console.log("Servidor à escuta na porta 3333...")