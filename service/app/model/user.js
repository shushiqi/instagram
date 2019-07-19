module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize

  const User = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncreament: true
    },
    userId: { type: STRING(255) },
    username: { type: STRING(255), allowNull: false },
    email: { type: STRING(255), allowNull: false },
    password: { type: STRING(255), allowNull: false },
    avatarUrl: { type: STRING(256), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg' },
    mobile: STRING(32),
    prefix: STRING(32),
    abstract: { type: STRING(255), allowNull: true },
    sex: { type: INTEGER, defaultValue: 0 },
    created_at: { type: DATE, defaultValue: NOW },
    updated_at: { type: DATE, defaultValue: NOW }
  }, {
      freezeTableName: true
    }
  )
  return User
}