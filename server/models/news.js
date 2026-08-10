const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('News', {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT },
    date: { type: DataTypes.STRING },
    label: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING }
  });
};

