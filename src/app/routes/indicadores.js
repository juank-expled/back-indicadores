const data = require('../data/dataApi');
const { dataDetail } = require('../data/dataDetail');

module.exports = function (app) {
    app.get('/api', (req, res) => {
        res.send(data.getDataApi());
    })
    app.get('/api/:codigo', (req, res) => {
        console.log(req.params.codigo);
        if (dataDetail[req.params.codigo] === undefined) {
            res.send({
                message:"No se pudo encontrar la solicitud o no existe",
                status:404
            })
        } else {
            res.send(dataDetail[req.params.codigo])
        }
    })
}