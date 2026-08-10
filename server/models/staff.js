const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Staff', {
    name: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING },
    bio: { type: DataTypes.TEXT },
    imageUrl: { type: DataTypes.STRING }
  });
};
