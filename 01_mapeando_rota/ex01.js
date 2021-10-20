const express = require('express')

// ### mapping routes ###

/*
    1° parametro: url
    2° função middleware
*/
module.exports = () => {
    const app = express()

    app.get('/', function(req, res) {
        res.send('<h1>Index!</h1>')
    })
    
    // in this case you can call from any http verb (get, post, put, delete...)
    app.all('/teste', function(req, res) {
        res.send('<h1>Teste!</h1>')
    })

    // regular expression that calls this route whenever the url has the word 'api'
    app.get(/api/, (req, res) => {
        res.send('<h1>API!</h1>')
    })

    return app
}
