const pool = require('./index');

module.exports = {
  getBoardList: async () => {
    const [rows, fields] = await pool.query(
      "SELECT * FROM board"
    );
    return [rows, fields];
  },

  getBoardDetail: async (boardId) => {
    const query = `select * from board where id=?`;
    const [rows, fields] = await pool.query(
      query,
      [boardId]
    );
    return [rows, fields];
    // let board = null;
    // for (let _board of Board) {
    //   if (_board.id === boardId) {
    //     board = _board;
    //   }
    // }
    // return board;
  },
  createBoard: async function (title, content, author) {
    const query = "INSERT INTO board (title, content) VALUES(?,?)";
    const [result, fields] = await pool.query(query,
      [title, content]
    );

    return [result, fields];
  },
  deleteBoard: async function (boardId) {
    const query = "DELETE FROM board WHERE id=?"
    const [result, fields] = await pool.query(query,
      [boardId]
    );

    return [result, fields]
  },
  editBoard: async function (boardId, title, content, author) {
    const query = "UPDATE board SET title=?, content=? WHERE id=?"

    const [result, fields] = await pool.query(query, [title, content, boardId]);
    return [result, fields]
  }
}