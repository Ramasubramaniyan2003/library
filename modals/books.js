const { DataTypes } = require('sequelize');
const { sq } = require('../config/db');

// Books --table
const Book = sq.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    ISBN:{
        type:DataTypes.STRING,
        allowNull:false
     },
     publisher:{
         type:DataTypes.STRING,
         allowNull:false
     },
     publishedDate:{
         type:DataTypes.DATE,
         allowNull:false
     },
     language:{
         type:DataTypes.STRING,
         allowNull:false
     },
     numberOfPages:{
         type:DataTypes.INTEGER,
         allowNull:false
     },
     bookType:{
        type:DataTypes.STRING,
       allowNull:false
     },
     imagePath:{
          type:DataTypes.STRING,
          allowNull:false
     },
     bookPath:{
       type:DataTypes.STRING,
       allowNull:false
     }
})
// Book.sync().then( ()=>{
//         console.log("table created or identified");
// }
// ).catch((e)=>{
//         console.log("problem creating a table");
// } )
module.exports={Book};
