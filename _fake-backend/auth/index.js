
const fs = require('fs');
const path = require('path');

module.exports.getAuth = app => {

  app.get('/auth', (req, res) => {
    return res.json(JSON.parse(
      fs.readFileSync(
        path.join(__dirname, 'get-success.json')
      )
    ));
  });

};

module.exports.postAuth = app => {

  app.post('/auth', (req, res) => {
    return res.json(JSON.parse(
      fs.readFileSync(
        path.join(__dirname, 'post-success.json')
      )
    ));
  });

};
