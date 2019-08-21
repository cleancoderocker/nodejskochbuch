const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  database: 'sakila',
  username: 'root',
  password: '1234'
});

const Actor = sequelize.define(
  'actor',
  {
    id: {
      field: 'actor_id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

(async () => {
  await sequelize.sync();
  await Actor.destroy({
    where: {
      firstName: 'MAX',
      lastName: 'MUSTERMANN'
    }
  });
})();
