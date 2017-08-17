import Sequelize from 'sequelize';

const connection = new Sequelize('weddingsite', 'testUser', 'test', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const User = connection.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

const Hobbies = connection.define('hobbies', {
  name: {
    type: Sequelize.STRING
  },
  userLink: {
    type: Sequelize.INTEGER
  },
  teamSport: {
    type: Sequelize.BOOLEAN
  }
});

User.hasMany(Hobbies, {foreignKey: 'userLink'});
Hobbies.belongsTo(User, {foreignKey: 'userLink'});

// force: true will drop the table if it already exists
// User.sync({force: false}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

// User.findAll().then(users => {
//   console.log(users)
// });

export default connection;
