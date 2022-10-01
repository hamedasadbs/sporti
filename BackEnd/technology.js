module.exports = {
  getTitle: (app, con) => {
    app.get("/techTitle", (req, res) => {
      con.query(
        `SELECT * FROM technology_title WHERE username='${req.query.username}'`,
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
  getTech: (app, con) => {
    app.get("/technology", (req, res) => {
      con.query(
        `SELECT * FROM technology WHERE username='${req.query.username}'`,
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
  addTechTitle: (app, con) => {
    app.post("/techTitle", (req, res) => {
      con.query(
        `INSERT INTO technology_title (name,username) VALUES ('${req.body.title}','${req.body.username}')`,
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
  addTechnology: (app, con) => {
    app.post("/technology", (req, res) => {
      con.query(
        `INSERT INTO technology (title,name,version , ability,username) VALUES ('${req.body.title}','${req.body.name}','${req.body.version}','${req.body.ability}','${req.body.username}')`,
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
  removeTechTitle: (app, con) => {
    app.delete("/techTitle", (req, res) => {
      con.query(
        `DELETE FROM technology_title WHERE name='${req.query.item}' AND username='${req.query.username}'`,
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
  removeTechnology: (app, con) => {
    app.delete("/technology", (req, res) => {
      con.query(
        `DELETE FROM technology WHERE name='${req.query.item}' AND username='${req.query.username}'`,
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
