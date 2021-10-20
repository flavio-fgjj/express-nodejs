const express = require('express')
const { route } = require('./ex05')

const router = require('./ex05')

module.exports = () => {
    const app = express()

    app.use('/api', router) // here, router is used as a middleware function (ex.: http://localhost:3000/api/clientes/1)

    return app
}