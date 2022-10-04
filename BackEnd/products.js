module.exports = {
  getProducts: (app, con) => {
    app.post("/products", (req, res) => {
      var query =
        "SELECT * FROM products" +
        (req.body.category ? ` WHERE category='${req.body.category}'` : "") +
        (req.body.type && req.body.type !== "none"
          ? ` AND type='${req.body.type}'`
          : "") +
        (req.body.kind && req.body.kind !== "none"
          ? ` AND kind='${req.body.kind}'`
          : "") +
        (req.body.brand && req.body.brand !== "none"
          ? ` AND brand='${req.body.brand}'`
          : "") +
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
