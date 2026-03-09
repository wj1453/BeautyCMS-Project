const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  openid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  membershipLevel: {
    type: DataTypes.ENUM('Normal', 'Silver', 'Gold', 'Diamond'),
    defaultValue: 'Normal'
  },
  totalSpending: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  }
}, {
  timestamps: true
});

module.exports = User;
