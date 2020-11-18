/*
  user
  id, 이름, 사진폴더 경로
*/

module.exports =(sequelize, DataTypes) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.STRING(600),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    path: {
      type: DataTypes.STRING(600),
      allowNull: false,
    }
  },
  {
    timestamps : false,
    freezeTableName : true,
    tableName : 'user'
  });
  calendar.associate = function(models){
    models.User.hasMany(models.Calendar, {
      foreignKey: 'user_id',
      onDelete : 'cascade'
    });
  };
};
