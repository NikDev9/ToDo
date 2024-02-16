module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        user_id: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        admin: {
            type: Sequelize.BOOLEAN
        }
    });
  
    return Users;
};