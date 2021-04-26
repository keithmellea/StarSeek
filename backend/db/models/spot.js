'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING(50),
    price: DataTypes.INTEGER,
    hostId: DataTypes.STRING,
    avg_Rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    system: DataTypes.STRING,
    planet: DataTypes.STRING,
    region: DataTypes.STRING,
    arrangements: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    const columnMapping = {
      through: "Booking",
      otherKey: "userId",
      foreignKey: "spotId"
    }
    Spot.belongsToMany(models.User, columnMapping);
    Spot.belongsTo(models.Host, {foreignKey: 'hostId'})
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
  };
  return Spot;
};