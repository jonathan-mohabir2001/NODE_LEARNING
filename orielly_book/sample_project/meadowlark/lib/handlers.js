const fortune = require('./fortune'); 
// fortune module imported into this js file . 
exports.home = (req, res) => {
  res.render('home')
}; 
// home route exported as its own function, this logic applies for the rest of the application. 

exports.about = (req, res) => {
  res.render('about', {fortune: fortune.getFortune()})
}
exports.notFound = (req, res) => {
  res.render('404')
}
exports.serverError = (err, req, res, next) => {
  res.render('500')
}
// Handlers are created, to route to pages created by handlebars. 