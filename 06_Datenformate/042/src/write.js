const yaml = require('js-yaml');

const INPUT = {
  version: '3.1',
  services: {
    db: {
      image: 'mysql',
      restart: 'always',
      environment: {
        MYSQL_ROOT_PASSWORD: 1234
      },
      ports: ['3306:3306'],
      expose: [3306],
      volumes: ['./init-db-sql:/docker-entrypoint-initdb.d']
    },
    adminer: {
      image: 'adminer',
      restart: 'always',
      ports: ['8082:8080']
    }
  }
};

try {
  const document = yaml.safeDump(INPUT);
  console.log(document);
} catch (error) {
  console.error(error);
}
