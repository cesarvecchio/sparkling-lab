var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Lampada = require('../models').Lampada;

router.get('/', function(req, res, next){

    console.log(`Recuperando todas as lampadas cadastradas`);

    const instrucaoSql = `SELECT
                            id_lampada, local
                            fk_condominio,
                            fk_status_lampada
                            FROM lampada`;

    sequelize.query(instrucaoSql, {
        model: Lampada,
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

router.get('/lampadas_especificas', function(req, res, next){

    var fk_condominio = 1;

    console.log(`Recuperando todas as lampadas cadastradas`);

    const instrucaoSql = `SELECT
                            id_lampada, local
                            fk_condominio,
                            fk_status_lampada
                            FROM lampada
                            WHERE fk_condominio = ${fk_condominio}`;

    sequelize.query(instrucaoSql, {
        model: Lampada,
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