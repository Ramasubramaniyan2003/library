const { DataTypes } = require('sequelize');
const { sq } = require('../config/db');
// Table --cart
const Cart = sq.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    bookId:{
       type:DataTypes.JSONB,
       defaultValue: []
    }
})
module.exports={Cart};