const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library', 'postgres', 'cse@1234', {
    host: "localhost",
    dialect: "postgres",
    port: 5000,
    logging: false
})
const dbtest = async () => {
    try {
        await sequelize.authenticate();
        console.log("connection established successfully")
    }
    catch (error) {
        console.error(error);
    }
}
module.exports = { sq: sequelize, dbtest };