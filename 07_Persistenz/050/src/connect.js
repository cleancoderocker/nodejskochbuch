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
      field: 'first_name',
      type: Sequelize.STRING
    },
    lastName: {
      field: 'last_name',
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

(async () => {
  await sequelize.sync();
})();
