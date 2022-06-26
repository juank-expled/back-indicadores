const app =require('./config/server')
const morgan = require('morgan');//libreria morgan
app.use(morgan('dev')) //te permite ver los tiempos y tipo de metodo a ocupar
require('./app/routes/indicadores')(app)
// require('./app/routes/condominio')(app)
// require('./app/routes/propietarios')(app)
// require('./app/routes/exportDataFile')(app)
// require('./app/routes/administracion')(app)

app.listen(app.get('port1'),()=>{
    console.log("server en el puerto: "+app.get('port1'))
})
app.listen(app.get('port2'),()=>{
    console.log("server en el puerto: "+app.get('port2'))
})