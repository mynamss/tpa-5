"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Todos","fk_id_user", Sequelize.INTEGER);
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("fk_id_user");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
