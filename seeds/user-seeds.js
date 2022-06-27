const { User } = require('../models');

const userData = [
  {
    username: 'Lunirs',
    email: 'seedemail1@gmail.com',
    password: 'seedpassword1',
  },
  {
    username: 'Srinul',
    email: 'seedemail2@gmail.com',
    password: 'seedpassword2',
  },
  {
    username: 'DSchrute',
    email: 'seedemail3@gmail.com',
    password: 'seedpassword3',
  },
  {
    username: 'BWright',
    email: 'seedemail4@gmail.com',
    password: 'seedpassword4',
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
