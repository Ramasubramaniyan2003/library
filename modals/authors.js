const {DataTypes}=require('sequelize');
const {sq}=require("../config/db");

const Author=sq.define('Authors',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    authorName: {
        type: DataTypes.STRING
    },
    birthYear:{
          type:DataTypes.INTEGER
    },
    nationality:{
           type:DataTypes.STRING
    }
})
module.exports={Author};