module.exports = {
  getData: (app, con) => {
    app.get("/projects", (req, res) => {
      con.query(
        `SELECT * FROM projects WHERE username='${req.query.username}'`,
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
    app.post("/projects", (req, res) => {
      con.query(
        `INSERT INTO projects (title,date,role,description,username) VALUES ('${req.body.title}','${req.body.date}','${req.body.role}','${req.body.desc}','${req.body.username}')`,
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
    app.delete("/projects", (req, res) => {
      con.query(
        `DELETE FROM projects WHERE title='${req.query.item}' AND username='${req.query.username}'`,
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
