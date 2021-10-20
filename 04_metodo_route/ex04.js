const express = require('express')

module.exports = () => {
    const app = express()

    // I recomend postman to test it;
    app.route('/clientes')
        .get((req, res) => res.send('Lista de Clientes'))
        .post((req, res) => res.send('Novo Cliente'))
        .put((req, res) => res.send('Atualiza Cliente'))
        .delete((req, res) => res.send('Deleta Cliente'))

    return app
}