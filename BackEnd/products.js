module.exports = {
  getProducts: (app, con) => {
    app.get("/products", (req, res) => {
      con.query(`SELECT * FROM products`, (err, result) => {
        if (err) throw err;
        if (result) {
          res.send({
            pro: result,
          });
        }
      });
    });
  },
  updateLike: (app, con) => {
    app.post("/products", (req, res) => {
      con.query(
        `UPDATE education SET 
        university='${req.body.university}',
        last_grade='${req.body.lastGrade}',
        thesis='${req.body.thesis}',
        year='${req.body.year}' 
        WHERE username='${req.body.username}'`,
        (err) => {
          if (err) {
            res.sendStatus(405);
          } else {
            res.sendStatus(200);
          }
        }
      );
    });
  },
};
