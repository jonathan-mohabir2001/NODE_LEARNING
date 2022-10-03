const express = require('express');
// express imported as module.
const router = express.Router();
// router method assigned to router.

router.get('/', (req, res) => {
  res.send('<h1>The user has landed</h1> ');
});

router.get('/error' ,  (req,res) => {
  res.status(500) 
  res.send('<h1> SERVER ERROR </h1>') 
})
// when this page is visited from the url, the status


// home page landing set to send a basic welcome message
router.get('/users/:id', (req, res) => {
  res.send('The request was sent to see' + req.params.id);
});
// routing parameter id passed beside the beside the user route e

module.exports = router;
// router is exported in order to be used within the express_server file.
