
module.exports.getAuth = app => {
  app.get('/auth', (req, res) => {
    return res.json({ method: 'get', hello: 'World' });
  });
};

module.exports.postAuth = app => {
  app.post('/auth', (req, res) => {
    return res.json({ method: 'post', hello: 'World' });
  });
};
