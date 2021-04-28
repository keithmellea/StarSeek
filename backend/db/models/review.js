'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      review: DataTypes.TEXT,
      author: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      spotId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function(models) {
    Review.belongsTo(models.Spot, { foreignKey: "spotId"});
  };
  return Review;
};