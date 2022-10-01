module.exports = {
  getData: (app, con) => {
    app.get("/skills", (req, res) => {
      con.query(
        `SELECT * FROM skills WHERE username='${req.query.username}'`,
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
    app.post("/skills", (req, res) => {
      con.query(
        `INSERT INTO skills (skill,username) VALUES ('${req.body.skill}','${req.body.username}')`,
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
    app.delete("/skills", (req, res) => {
      con.query(
        `DELETE FROM skills WHERE skill='${req.query.item}' AND username='${req.query.username}'`,
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
