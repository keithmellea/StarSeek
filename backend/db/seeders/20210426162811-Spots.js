'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     "Spots",
     [
       {
         name: "Mons Olympus",
         price: 500,
         avg_Rating: 4.78,
         description: "desc",
         system: "Milky Way",
         planet: "Mars",
         region: "Mountains",
         hostId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "Station Eris",
         price: 800,
         avg_Rating: 4.78,
         description: "desc",
         system: "Milky Way",
         planet: "Jupiter",
         region: "Exolayer",
         hostId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "Tanaan Jungles",
         price: 2200,
         avg_Rating: 4.78,
         description: "desc",
         system: "Kepler 425ger",
         planet: "Osiris",
         region: "Timorin",
         hostId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", null, {});
  }
};
