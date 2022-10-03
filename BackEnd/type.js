module.exports = {
  getType: (app, con) => {
    app.post("/type", (req, res) => {
      con.query(
        `SELECT DISTINCT ${req.body.list} from products`,
        (err, result) => {
          if (err) throw err;
          if (result.length) {
            res.send({
              dataset: result,
            });
          } else {
            res.send({
              dataset: [],
            });
          }
        }
      );
    });
  },
};
