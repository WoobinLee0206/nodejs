const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Board = sequelize.define("Board", {
    // 속성(Columns - Fields)
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255), // varchar
      allowNull: false,
      unique: false
    },
    content: {
      type: DataTypes.TEXT(),
      allowNull: false,
      unique: false
    }
  }, {
    sequelize: sequelize,
    timestamps: true,
    modelName: "Board",
    tableName: 'boards',
    paranoid: true, // deleteAt
    charset: 'utf8',
    collation: 'utf8_general_ci'
  });

  Board.associate = (db) => {
    db.Board.hasMany(db.Comment,
      {
        foreignKey: 'boardId',
        sourceKey: 'id',
        as: 'commentList'
      }
    );
  }

  Board.getBoard = async (boardId) => {
    return await Board.findOne({
      where: {
        id: boardId
      }
    });
  }

  Board.createBoard = async (title, content) => {
    return await Board.create({
      title: title,
      content: content
    })
  }

  Board.getAllBoard = async () => {
    return await Board.findAll();
  }

  Board.deleteBoard = async (boardId) => {
    return await Board.destroy({
      where: {
        id: boardId
      }
    });
  }

  Board.updateBoard = async (boardId, title, content) => {
    return await Board.update({
      title: title,
      content: content
    }, {
      where: {
        id: boardId
      }
    })
  }

  return Board;
}