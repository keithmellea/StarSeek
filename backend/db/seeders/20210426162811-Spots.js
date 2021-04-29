'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     "Spots",
     [
       {
         name: "Olympus Mons",
         photos:
           "https://cdn.mos.cms.futurecdn.net/XNRcoHujh5mZHmPQZzYbgH.jpg https://designyoutrust.com/wp-content/uploads/2020/09/1-36.jpg https://designyoutrust.com/wp-content/uploads/2020/09/1-36.jpg https://designyoutrust.com/wp-content/uploads/2020/09/1-36.jpg https://astronomy.com/-/media/Images/News%20and%20Observing/News/2020/11/DSCCR1116_15.jpg?mw=600",
         price: 500,
         avg_Rating: 4.78,
         arrangements: "Cabin",
         description:
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         system: "Milky Way",
         planet: "Mars",
         region: "Mountains",
         hostId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
         latitude: 49.260112287007246,
         longitude: -123.19992906626858,
       },
       {
         name: "Station Eris",
         photos:
           "backend/db/images/station1.jpg backend/db/images/station2.jpeg backend/db/images/station3.jpeg",
         price: 800,
         avg_Rating: 4.78,
         description: "desc",
         system: "Milky Way",
         planet: "Jupiter",
         region: "Exolayer",
         hostId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
         latitude: 49.260112287007246,
         longitude: -123.19992906626858,
       },
       {
         name: "Tanaan Jungles",
         photos:
           "backend/db/images/jungle1.jpg backend/db/images/jungle3.jpg backend/db/images/jungle2.jpeg",
         price: 2200,
         avg_Rating: 4.78,
         description: "desc",
         system: "Kepler 425ger",
         planet: "Osiris",
         region: "Timorin",
         hostId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
         latitude: 49.260112287007246,
         longitude: -123.19992906626858,
       },
     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", null, {});
  }
};
