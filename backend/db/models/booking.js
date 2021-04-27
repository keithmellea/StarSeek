'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      userId: DataTypes.STRING,
      spotId: DataTypes.STRING,
      spotId: DataTypes.STRING,
      location: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {}
  );
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};