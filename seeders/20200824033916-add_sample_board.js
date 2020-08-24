'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('boards', [{
      title: '제목1',
      content: "제목2",
    }, {
      title: '제목1',
      content: "제목2",
    }, {
      title: '제목1',
      content: "제목2",
    }, {
      title: '제목1',
      content: "제목2",
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
