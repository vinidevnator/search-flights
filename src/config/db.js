import { Sequelize } from 'sequelize';

// Connection to database
const connection = new Sequelize('flights', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default connection;