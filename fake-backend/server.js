const express = require('express');
const app = express();
const auth = require('./auth/index');

//IF NEEDED http://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
//app.use((req, res, next) => {
//  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization,x-access-token');
//  res.setHeader('Access-Control-Allow-Credentials', true);
//  next();
//});

auth.getAuth(app);
auth.postAuth(app);

app.use((req, res, next) => res.status(404).send('NOT FOUND'));

app.listen(3000, () => {
  console.log('Listening on 3000!');
})
