"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        title: "pr matematika",
        description: "pr halaman 1- 30",
        deadline: "2022-11-20 23:59:59",
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_id_user: 1,
      },
      {
        title: "pr biologi",
        description: "pr halaman 90",
        deadline: "2022-11-20 23:59:59",
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_id_user: 1,
      },
      {
        title: "pr pkn",
        description: "pr halaman 8",
        deadline: "2022-11-20 23:59:59",
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_id_user: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
