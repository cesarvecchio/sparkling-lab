'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		id_grafico_lampada: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		data: {
			type: DataTypes.DATE,
			allowNull: false
		},
		lumens: {
			type: DataTypes.DATE,
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'grafico_lampada', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
