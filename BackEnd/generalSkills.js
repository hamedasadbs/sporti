module.exports = {
  getData: (app, con) => {
    app.get("/general", (req, res) => {
      con.query(
        `SELECT * FROM general WHERE username='${req.query.username}'`,
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
    app.post("/general", (req, res) => {
      con.query(
        `INSERT INTO general (langName,ability,username) VALUES ('${req.body.langName}',${req.body.ability},'${req.body.username}')`,
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
    app.delete("/general", (req, res) => {
      con.query(
        `DELETE FROM general WHERE langName='${req.query.item}' AND username='${req.query.username}'`,
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
