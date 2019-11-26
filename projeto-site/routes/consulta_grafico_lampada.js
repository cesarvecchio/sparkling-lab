var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Grafico_Lampada = require('../models').Grafico_Lampada;

router.get('/', function(re, res, next){

    console.log(`Recuperando todos os dados dos graficos das lampadas`);

     const instrucaoSql = `SELECT 
                            id_grafico_lampada,
                            FORMAT(data, 'HH:mm:ss') as data, volts
                            FROM grafico_lampada order by id_grafico_lampada desc`;

    // const instrucaoSql = `SELECT * from grafico_lampada`;

    sequelize.query(instrucaoSql, {
        model: Grafico_Lampada,
        mapToModel: true
    })
    .then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);
        res.json(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message)
    })
});

router.get('/grafico_atual', function(req, res, next){

    const limite_linhas = 7;

    console.log(`Recuperando últimos ${limite_linhas} registros`);

    const instrucaoSql = `select top ${limite_linhas} 
						volts,
						FORMAT(data,'HH:mm:ss') as momento_grafico 
						from grafico_lampada order by id_grafico_lampada desc`;


    // const instrucaoSql = `select volts,
    // date_format(data, '%Y/%m/%d') as momento_grafico
    // from grafico_lampada order by id_grafico_lampada desc limit ${limite_linhas}`;

    sequelize.query(instrucaoSql, {
        model: Grafico_Lampada,
        mapToModel: true
    })
    .then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);
        res.json(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});


router.get('/grafico_semana', function(re, res, next){

    const limite_linhas = 7;
    const data = new Date();
    const ano_atual = data.getFullYear();
    

    console.log(`Recuperando todos os dados dos graficos das lampadas`);

    const instrucaoSql = `select top ${limite_linhas} avg(volts) as 'volts',
    datepart(week, data) as 'momento_grafico'
    from grafico_lampada where year(data) = ${ano_atual} 
    group by datepart(week, data) order by datepart(week, data) desc`;

    // const instrucaoSql = `SELECT avg(volts) as 'volts',
    // week(data) as momento_grafico
    // from grafico_lampada where year(data) = ${ano_atual} 
    // group by week(data) desc limit ${limite_linhas}`;

    sequelize.query(instrucaoSql, {
        model: Grafico_Lampada,
        mapToModel: true
    })
    .then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);
        res.json(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message)
    })
});


router.get('/grafico_mes', function(re, res, next){

    const limite_linhas = 7;
    const data = new Date();
    const ano_atual = data.getFullYear();
    

    console.log(`Recuperando todos os dados dos graficos das lampadas`);

    const instrucaoSql = `select top ${limite_linhas} avg(volts) as 'volts', 
    month(data) as 'momento_grafico'
    from grafico_lampada where year(data) = ${ano_atual}
    group by month(data) order by month(data) desc`;

    // const instrucaoSql = `SELECT avg(volts) as 'volts',
    // month(data) as momento_grafico
    // from grafico_lampada where year(data) = ${ano_atual} 
    // group by month(data) desc limit ${limite_linhas}`;

    sequelize.query(instrucaoSql, {
        model: Grafico_Lampada,
        mapToModel: true
    })
    .then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);
        res.json(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message)
    })
});


router.get('/grafico_ano', function(re, res, next){

    const limite_linhas = 7;

    console.log(`Recuperando todos os dados dos graficos das lampadas`);

    const instrucaoSql = `SELECT top ${limite_linhas} avg(volts) as 'volts',
    year(data) as 'momento_grafico'
    from grafico_lampada group by year(data) order by year(data) desc`;

    // const instrucaoSql = `SELECT avg(volts) as 'volts',
    // year(data) as momento_grafico
    // from grafico_lampada group by year(data) desc limit ${limite_linhas}`;

    sequelize.query(instrucaoSql, {
        model: Grafico_Lampada,
        mapToModel: true
    })
    .then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);
        res.json(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message)
    })
});



module.exports = router;