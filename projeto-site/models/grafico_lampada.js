'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Grafico_Lampada = sequelize.define('Grafico_Lampada',{	
		id_grafico_lampada: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		data: {
			type: DataTypes.DATE,
			allowNull: false
		},
		volts: {
			type: DataTypes.DOUBLE, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
		fk_lampada: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, 
	{
		tableName: 'grafico_lampada', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Grafico_Lampada;
};
