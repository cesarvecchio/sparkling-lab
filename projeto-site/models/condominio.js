'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Condominio = sequelize.define('Condominio',{	
		id_condominio: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			type: DataTypes.STRING,
			allowNull: false
		},
        fk_sindico: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	}, 
	{
		tableName: 'condominio', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Condominio;
};
