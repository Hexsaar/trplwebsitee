const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
  const Admin = sequelize.define('Admin', {
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  }, {
    hooks: {
      beforeCreate: async (admin) => {
        if(admin.password && admin.password.length < 60){
          const hash = await bcrypt.hash(admin.password, 10);
          admin.password = hash;
        }
      }
    }
  });

  Admin.prototype.validatePassword = function(password){
    return bcrypt.compare(password, this.password);
  };

  return Admin;
};
