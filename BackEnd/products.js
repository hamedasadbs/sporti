module.exports = {
  getProducts: (app, con) => {
    app.post("/products", (req, res) => {
      var query =
        "SELECT * FROM products" +
        (req.body.category ? ` WHERE category='${req.body.category}'` : "") +
        (req.body.type ? ` AND type='${req.body.type}'` : "") +
        (req.body.orderBy
          ? ` ORDER BY ${req.body.orderBy} ${req.body.orderByType}`
          : "") +
        (req.body.limit ? ` LIMIT ${req.body.limit}` : "") +
        (req.body.offset ? ` OFFSET ${req.body.offset}` : "");
      con.query(query, (err, result) => {
        if (err) throw err;
        if (result) {
          res.send({
            pro: result,
          });
        }
      });
    });
  },
};
