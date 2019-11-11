
function apagaFilme(ident){
    console.log('Vou tentar apagar o ' + ident + ' ...')
    axios.delete('/filmes/' + ident)
        .then(response => window.location.assign('/filmes/'))
        .catch(error => console.log(error))
}
