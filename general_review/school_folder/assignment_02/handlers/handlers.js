/*
This JS file contains routes for the whole application 

The render method of response will send the pug files for the 
front end to see. 
*/

exports.homePage = (req, res) => {
  res.render('layout.pug')
}

