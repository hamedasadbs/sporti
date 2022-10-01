module.exports = {
  getData: (app, con) => {
    app.get("/learning", (req, res) => {
      con.query(
        `SELECT * FROM learning WHERE username='${req.query.username}'`,
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
    app.post("/learning", (req, res) => {
      con.query(
        `INSERT INTO learning (name,website,time,username) VALUES ('${req.body.name}','${req.body.website}',${req.body.time},'${req.body.username}')`,
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
    app.delete("/learning", (req, res) => {
      con.query(
        `DELETE FROM learning WHERE name='${req.query.item}' AND username='${req.query.username}'`,
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
