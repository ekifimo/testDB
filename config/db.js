const Sequileze = require('sequelize');
const sequelize = new Sequileze(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        freezeTableName: true,
        dialect: 'mysql',
        host: process.env.DB_HOST,
    });

    const db = {};

    db.Sequileze = Sequileze;
    db.sequelize = sequelize;

    db.auth = require('../models/auth')(sequelize, Sequileze);

module.exports = db;