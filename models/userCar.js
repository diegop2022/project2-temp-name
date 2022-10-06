//import sequelize library
const { Model, DataTypes } = require('sequelize');
//database conection from config
const sequelize = require('../config/connection');

//initialize userCar model extending off Sequelize model 
class userCar extends Model { }

//fields and rules for userCar model
userCar.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        car_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        engine_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'usercar',
    }
);

module.exports = userCar;