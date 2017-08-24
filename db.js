import Sequelize from 'sequelize';

const connection = new Sequelize('weddingsite', 'weddingdbuser', 'test', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const User = connection.define('user', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  uuid: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  birthdate: {
    type: Sequelize.DATE
  },
  type: {
    type: Sequelize.INTEGER
  },
  deleted: {
    type: Sequelize.BOOLEAN
  },
});

const userPreference = connection.define('user_preference', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  userId: {
    type: Sequelize.BIGINT
  },
  theme: {
    type: Sequelize.STRING
  }
});

const Post = connection.define('post', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  uuid: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING,
  },
  votes: {
    type: Sequelize.INTEGER
  },
  url: {
    type: Sequelize.STRING
  },
  deleted: {
    type: Sequelize.BOOLEAN
  },
});

User.hasOne(userPreference, {foreignKey: 'userId'});
userPreference.belongsTo(User, {foreignKey: 'userId'});

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
