module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('userlogin', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nip: {
            type: Sequelize.BIGINT,
            allowNull: false,
            unique: true
        },
        nama: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
    });

    return User;
};