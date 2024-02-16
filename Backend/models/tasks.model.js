module.exports = (sequelize, Sequelize) => {
    const Tasks = sequelize.define("tasks", {
        task_id: {
            type: Sequelize.INTEGER
        },
        task_name: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    });
  
    return Tasks;
};