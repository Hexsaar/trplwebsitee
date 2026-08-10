const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Lecturer', {
    name: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING },
    bio: { type: DataTypes.TEXT },
    imageUrl: { type: DataTypes.STRING }
  });
};
