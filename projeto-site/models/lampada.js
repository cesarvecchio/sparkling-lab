'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Lampada = sequelize.define('Lampada',{	
		id_lampada: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		local: {
			type: DataTypes.STRING,
			allowNull: false
		},
		fk_condominio: {
			type: DataTypes.INTEGER,
			allowNull: false
        },
        fk_status_lampada: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'lampada', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Lampada;
};
