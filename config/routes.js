

module.exports = function(app, passport) {

  app.get('/', function(req, res, next) {
    res.render('layout');  
  });
};