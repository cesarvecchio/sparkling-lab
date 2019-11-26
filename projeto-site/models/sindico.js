'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Sindico = sequelize.define('Sindico',{
		id_sindico: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		sobrenome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false
		},
		senha:{
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'sindico', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Sindico;
};
