express = require('express');
router = express.Router();
sequelize = require('../models').sequelize;
Condominio = require('../models').Condominio;

router.get('/', function(req,res,next){

    console.log(`Recuperar todos os condominios registrados`);

    const instrucaoSql = `SELECT
                            id_condominio,
                            nome,
                            imagem,
                            cidade,
                            bairro,
                            cep,
                            complemento,
                            numero,
                            logradouro,
                            fk_sindico
                            FROM condominio`;

    sequelize.query(instrucaoSql, {
        model: Condominio,
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

router.get('/condominios_especifico', function(req,res,next){

    const id_condominio = 1;

    console.log(`Recuperar todos os condominios registrados`);

    const instrucaoSql = `SELECT
                            id_condominio,
                            nome,
                            imagem,
                            cidade,
                            bairro,
                            cep,
                            complemento,
                            numero,
                            logradouro,
                            fk_sindico
                            FROM condominio
                            WHERE id_condominio = ${id_condominio}`;

    sequelize.query(instrucaoSql, {
        model: Condominio,
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

router.get('/condominios_sindico_especifico', function(req,res,next){

    const fk_sindico = 1;

    console.log(`Recuperar todos os condominios registrados`);

    const instrucaoSql = `SELECT
                            id_condominio,
                            nome,
                            imagem,
                            cidade,
                            bairro,
                            cep,
                            complemento,
                            numero,
                            logradouro,
                            fk_sindico
                            FROM condominio
                            WHERE fk_condominio = ${fk_sindico}`;

    sequelize.query(instrucaoSql, {
        model: Condominio,
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