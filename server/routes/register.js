module.exports = function(app) {

  app.post('/register', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    res.send({
      status: 'ok',
      user: {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
      }
    });

  });

};
