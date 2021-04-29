'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      userId: DataTypes.INTEGER,
      spotId: DataTypes.INTEGER,
      booking: DataTypes.STRING,
      location: DataTypes.STRING
    },
    {}
  );
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};