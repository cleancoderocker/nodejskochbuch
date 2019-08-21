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
    // Standardmäßig werden die Tabellennamen als Plural des
    // angegebenen Namens erzeugt, im Beispiel "actors". Möchte
    // man dies verhindern, muss die Eigenschaft "freezeTableName"
    // auf "true" gesetzt werden.
    freezeTableName: true,
    timestamps: false
  }
);

(async () => {
  await sequelize.sync();
  const result = await Actor.create({
    firstName: 'MAX',
    lastName: 'MUSTERMANN'
  });
  console.log(result);
})();

sequelize
  .sync()
  .then(() =>
    Actor.create({
      first_name: 'MAX',
      last_name: 'MUSTERMANN'
    })
  )
  .then(max => {
    console.log(max.toJSON());
  });
