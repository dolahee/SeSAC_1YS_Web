const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
// config = {
//     "development":{ // 개발환경
//         "host":"localhost",
//         "database":"sesac_test",
//         "username":"user",
//         "password":"dohee0223",
//         "dialect":"mysql"
//     },
//     "production":{ // 배포환경
//         "host":"localhost",
//         "database":"sesac_test",
//         "username":"user",
//         "password":"dohee0223",
//         "dialect":"mysql"
//     }
// }

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Visitor = require("./Visitor")(sequelize, Sequelize);

// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize,
//     "Visitor" : "Visitor.js 에서 return 받은 값"
// }

module.exports = db;
