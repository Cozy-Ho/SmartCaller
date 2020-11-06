/*
  calendar
  id, 제목, 내용, 시작시간, 끝나는 시간, 알림설정?
*/

module.exports =(sequelize, DataTypes) => {
  return sequelize.define('calendar', {
    calendar_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    alarm: {
      type: DataTypes.DATE,
      allowNull: true,
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
