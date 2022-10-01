module.exports = {
  getData: (app, con) => {
    app.get("/interests", (req, res) => {
      con.query(
        `SELECT * FROM interests WHERE username='${req.query.username}'`,
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
  addData: (app, con) => {
    app.post("/interests", (req, res) => {
      con.query(
        `INSERT INTO interests (interest,username) VALUES ('${req.body.interest}','${req.body.username}')`,
        (err) => {
          if (err) throw err;
          if (err) {
            res.sendStatus(405);
          } else {
            res.sendStatus(200);
          }
        }
      );
    });
  },
  removeData: (app, con) => {
    app.delete("/interests", (req, res) => {
      con.query(
        `DELETE FROM interests WHERE interest='${req.query.item}' AND username='${req.query.username}'`,
        (err) => {
          if (err) throw err;
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
