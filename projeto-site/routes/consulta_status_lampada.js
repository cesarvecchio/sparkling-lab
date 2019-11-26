var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Status_Lampada = require('../models').Status_Lampada;

router.get('/', function(req, res, next){

    console.log(`Recuperando todos os status de lampadas cadastradas`);

    const instrucaoSql = `SELECT 
                            id_status_lampada, 
                            descricao
                            FROM status_lampada`;

    sequelize.query(instrucaoSql, {
        model: Status_Lampada,
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

router.get('/ativo_status_lampada', function(req, res, next){

    console.log(`Recuperando o status ativo da lampada`);

    const instrucaoSql = `SELECT id_status_lampada,
                            descricao 
                            FROM status_lampada
                            WHERE descricao = 'Ativo'`;

    sequelize.query(instrucaoSql, {
        model: Status_Lampada,
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

router.get('/inativo_status_lampada', function(req, res, next){

    console.log(`Recuperando o status inativo da lampada`);

    const instrucaoSql = `SELECT id_status_lampada,
                            descricao 
                            FROM status_lampada
                            WHERE descricao = 'Inativo'`;

    sequelize.query(instrucaoSql, {
        model: Status_Lampada,
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

router.get('/maufuncionamento_status_lampada', function(req, res, next){

    console.log(`Recuperando o status mau funcionamento da lampada`);

    const instrucaoSql = `SELECT id_status_lampada,
                            descricao 
                            FROM status_lampada
                            WHERE descricao = 'Mau funcionamento'`;

    sequelize.query(instrucaoSql, {
        model: Status_Lampada,
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

module.exports = router;