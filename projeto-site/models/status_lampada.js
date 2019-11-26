'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Status_Lampada = sequelize.define('Status_Lampada',{	
		id_status_lampada: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		descricao: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'status_lampada', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Status_Lampada;
};
