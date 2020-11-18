/*
  calendar
  id, 제목, 내용, 시작시간, 끝나는 시간, 알림설정?
*/

module.exports =(sequelize, DataTypes) => {
  return sequelize.define('calendar', {
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  },
  {
    timestamps : false,
    freezeTableName : true,
    tableName : 'calendar'
  });
};

/*

}, {
  timestamps: true,
});
*/
