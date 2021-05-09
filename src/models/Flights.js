import sequelize from 'sequelize';
import connection from '../config/db.js';

// Model Flights
const Flights = connection.define('flights', {
  from: sequelize.DataTypes.STRING,
  to: sequelize.DataTypes.STRING,
  date: sequelize.DataTypes.DATE,
  company: sequelize.DataTypes.STRING
}, {
  timestamps: false
});

export default Flights;