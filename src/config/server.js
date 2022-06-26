const express = require("express"); //libreria de node js
const path = require('path');
const bodyPareser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())//para manejar json dentro de nodejs
require('dotenv').config({
    path: __dirname+"../../../"+ '.env'
});
app.set('port1',process.env.PORT);
app.set('port2',process.env.PORT2);

/*en caso de ocupar vistas */
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../app/view'));
/*en caso de ocupar vistas */
// mdiddlaware
app.use(bodyPareser.urlencoded({extended:false}));
let dirName = __dirname.replace('\config','');
app.use(express.static(dirName+'public', {index: 'index.html'}))
module.exports=app;