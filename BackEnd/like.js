module.exports = {
  getLikes: (app, con) => {
    app.get("/like", (req, res) => {
      con.query(
        `SELECT * FROM products INNER JOIN liked ON products.id=liked.product_id WHERE liked.username='${req.query.username}'`,
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
  changeLikes: (app, con) => {
    app.post("/like", (req, res) => {
      con.query(
        `SELECT * FROM liked WHERE username= '${req.body.username}' AND product_id= ${req.body.productId}`,
        (err, result) => {
          if (err) throw err;
          if (result.length) {
            con.query(
              `delete from liked where product_id=${req.body.productId} and username='${req.body.username}'`,
              (err) => {
                if (err) {
                  res.sendStatus(405);
                } else {
                  res.sendStatus(200);
                }
              }
            );
          } else {
            con.query(
              `insert into liked (username,product_id) VALUES ('${req.body.username}',${req.body.productId})`,
              (err) => {
                if (err) {
                  res.sendStatus(405);
                } else {
                  res.sendStatus(200);
                }
              }
            );
          }
        }
      );
    });
  },
};
