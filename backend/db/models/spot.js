'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      name: DataTypes.STRING(50),
      price: DataTypes.DECIMAL,
      hostId: DataTypes.STRING,
      avg_Rating: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      system: DataTypes.STRING,
      planet: DataTypes.STRING,
      region: DataTypes.STRING,
      arrangements: DataTypes.TEXT,
    },
    {}
  );
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