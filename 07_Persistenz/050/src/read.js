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
      // Standardmäßig wird nach Feldern gesucht,
      // die den gleichen Namen wie die Eigenschaft
      // haben. Über die Eigenschaft "field" lässt
      // sich darüber hinaus ein Mapping angeben.
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
  const actors = await Actor.findAll();
  actors.forEach((actor) => {
    console.log(actor.id);
    console.log(actor.firstName);
    console.log(actor.lastName);
  });
})();

(async () => {
  await sequelize.sync();
  const actors = await Actor.findAll({
    where: {
      lastName: 'MUSTERMANN'
    }
  });
  console.log('--------');
  actors.forEach((actor) => {
    console.log(actor.id);
    console.log(actor.firstName);
    console.log(actor.lastName);
  });
})();
