module.exports = {
  getCart: (app, con) => {
    app.get("/cart", (req, res) => {
      con.query(
        `SELECT * FROM products INNER JOIN cart ON products.id=cart.product_id WHERE cart.username='${req.query.username}'`,
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
  addCart: (app, con) => {
    app.post("/addCart", (req, res) => {
      con.query(
        `INSERT INTO cart (username,product_id,number) VALUES ('${req.body.username}',${req.body.productId},1)`,
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
  increaseCart: (app, con) => {
    app.post("/increaseCart", (req, res) => {
      con.query(
        `UPDATE cart SET number=number+1 WHERE username= '${req.body.username}' AND product_id= ${req.body.productId}`,
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
  decreaseCart: (app, con) => {
    app.post("/decreaseCart", (req, res) => {
      con.query(
        `UPDATE cart SET number=number-1 WHERE username= '${req.body.username}' AND product_id= ${req.body.productId}`,
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
  deleteCart: (app, con) => {
    app.delete("/cart", (req, res) => {
      con.query(
        `DELETE FROM cart WHERE username= '${req.query.username}' AND product_id= ${req.query.productId}`,
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
