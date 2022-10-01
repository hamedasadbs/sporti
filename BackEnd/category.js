module.exports = {
  getData: (app, con) => {
    app.get("/category", (req, res) => {
      con.query(`SELECT * FROM category`, (err, result) => {
        if (err) throw err;
        if (result) {
          res.send({
            cat: result,
          });
        }
      });
    });
  },
};
