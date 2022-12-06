const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "myuser", // create table visitor(
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not mull
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        // comment mediumtext
        type: DataTypes.TEXT("medium"),
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "myuser", //select * from visitor;
      freezeTableName: true,
      timestamps: false, //default true creatAt modifyAt
      // collate, charset: "UTF8"
    }
  );
};

module.exports = User;

// exports.post_signup = (data, cb) => {
//   let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
//   cnn.query(sql, function (err) {
//     if (err) throw err;
//     cb();
//   });
// };

// exports.post_signin = (id, pw, cb) => {
//   let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
//   cnn.query(sql, function (err, rows) {
//     if (err) throw err;
//     cb(rows);
//   });
// };
// exports.get_user = (id, cb) => {
//   let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
//   cnn.query(sql, function (err, rows) {
//     if (err) throw err;
//     cb(rows);
//   });
// };

// exports.update_profile = (data, cb) => {
//   let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
//   cnn.query(sql, (err) => {
//     if (err) throw err;
//     cb();
//   });
// };
// exports.delete_user = (id, cb) => {
//   cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
//     if (err) throw err;
//     cb();
//   });
// };
