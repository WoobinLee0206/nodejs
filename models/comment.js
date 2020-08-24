const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Comment = sequelize.define('Comment',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false
      },
      // board_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'boards',
      //     key: 'id'
      //   }
      // }
    }, {
    sequelize: sequelize,
    charset: 'utf8',
    collation: 'utf8_general_ci',
    timestamps: true,
    paranoid: true,
    modelName: "Comment",
    tableName: 'comments'
  });

  Comment.associate = (db) => {
    db.Comment.belongsTo(db.Board,
      { foreignKey: 'boardId', targetKey: 'id', as: 'board' });
  }

  return Comment;
}