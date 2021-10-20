const express = require('express')

// ### cadeia de middleware ###

module.exports = () => {
    const app = express()

    app.get('/', function(req, res, next) {
        console.log('Inicio...')
        next()
        console.log('Fim...')
    })
    
    app.all('/', function(req, res) {
        console.log('Resposta...')
        res.send('<h1>Olá Express!</h1>')
    })

    return app
}
