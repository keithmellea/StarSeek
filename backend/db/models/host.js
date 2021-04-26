'use strict';
module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define('Host', {
    name: DataTypes.STRING,
    avg_Rating: DataTypes.INTEGER
  }, {});
  Host.associate = function(models) {
    Host.hasMany(models.Spot, {foreignKey: "hostId"})
  };
  return Host;
};