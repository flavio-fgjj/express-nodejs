const express = require('express')

// ### método use ###

/*
    When 'use' is used, url should start with the same name passed on param. No matter what comes after!
    Ex.: '/api/nomatterwhatscomesafter'

    If you don't pass url param, everything on configured port will pass.
*/
module.exports = () => {
    const app = express()

    app.use('/api', function(req, res, next) {
        console.log('Inicio...')
        next()
        console.log('Fim...')
    })
    
    app.use('/api', function(req, res) {
        console.log('Resposta...')
        res.send('<h1>Olá Express!</h1>')
    })

    // without url param.
    app.use(function(req, res) {
        console.log('Always...')
        res.send('<h1>Always called!</h1>')
    })

    return app
}
