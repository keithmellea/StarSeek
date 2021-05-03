'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert(
        "Hosts",
        [
          {
            name: "Alagash III",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Zandalore",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Alexander",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Rich",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Veduis",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Pryor",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Fatima",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Saliah",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete("Hosts", null, {});
  }
};
