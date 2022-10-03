module.exports = {
  getUser: (app, con) => {
    app.post("/login", (req, res) => {
      //query to get user info
      con.query(
        `SELECT * FROM account WHERE username='${req.body.username}' AND password='${req.body.password}'`,
        (err, result, fields) => {
          if (err) throw err;
          if (result.length) {
            res.send({
              user: result[0],
            });
          } else {
            res.sendStatus(405);
          }
        }
      );
    });
  },
  addUser: (app, con) => {
    app.post("/signup", (req, res) => {
      //query to get user info
      con.query(
        `INSERT INTO account (name,username,email,password) VALUES ('${req.body.name}','${req.body.username}','${req.body.email}','${req.body.password}')`,
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
