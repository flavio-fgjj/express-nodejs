//let app = require('./01_mapeando_rota/ex01')()
//let app = require('./02_cadeia_de_middleware/ex02')()
//let app = require('./03_metodo_USE/ex03')()
//let app = require('./04_metodo_route/ex04')()
let app = require('./05_express_router/index')()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))