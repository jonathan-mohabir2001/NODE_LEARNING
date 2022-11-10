const messages = require('./message')
// message array imported as module. 

exports.home= (req, res) => {
  res.render('home')
}

exports.about = (req, res) => {
  res.render('about')
}

exports.notFound = (req, res)=> {
  res.render('404')
}

exports.serverError= (req, res)=> {
  res.render('505')
}


