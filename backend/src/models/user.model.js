// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const user = sequelizeClient.define('user', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      required: [true, "DOB is required"]
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      required: [true, "Email is required"]
    },
    status: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: false,
      required: [true, "Status is required"]
    },
    hourlyRate: {
      type: DataTypes.DECIMAL(14, 4),
      allowNull: true,
      required: [true, "Hourly Rate is required"]
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  user.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return user;
};
