const Visitor = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "visitor", // create table visitor(
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not mull
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", //select * from visitor;
      freezeTableName: true,
      timestamps: false, //default true creatAt modifyAt
      // collate, charset: "UTF8"
    }
  );
};

module.exports = Visitor;
