'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     "Spots",
     [
       {
         name: "Mons Olympus",
         photos: 'https://cdn.mos.cms.futurecdn.net/XNRcoHujh5mZHmPQZzYbgH.jpghttps://designyoutrust.com/wp-content/uploads/2020/09/1-36.jpghttps://designyoutrust.com/wp-content/uploads/2020/09/1-36.jpghttps://designyoutrust.com/wp-content/uploads/2020/09/1-36.jpg backend/db/images/mons2.jpg backend/db/images/mons3.jpg backend/db/images/mons4.jpeg',
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
         photos: 'backend/db/images/station1.jpg backend/db/images/station2.jpeg backend/db/images/station3.jpeg',
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
         photos: 'backend/db/images/jungle1.jpg backend/db/images/jungle3.jpg backend/db/images/jungle2.jpeg',
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
