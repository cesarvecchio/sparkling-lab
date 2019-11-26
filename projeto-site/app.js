process.env.NODE_ENV = 'production';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
const leiturasRouter = require('./routes/leituras');

const condominioRouter = require('./routes/consulta_condominio');
const graficoLampadaRouter = require('./routes/consulta_grafico_lampada');
const lampadaRouter = require('./routes/consulta_lampada');
const sindicoRouter = require('./routes/consulta_sindico');
const statusLampadaRouter = require('./routes/consulta_status_lampada');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', require('./app/controller'));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);

app.use('/condominio', condominioRouter);
app.use('/grafico_lampada', graficoLampadaRouter);
app.use('/lampada', lampadaRouter);
app.use('/sindico', sindicoRouter);
app.use('/status_lampada', statusLampadaRouter);

module.exports = app;
