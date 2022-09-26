const express = require('express');
// express imported from node modules.
const router = express.Router();
// router variable set.

router.get('/', (req, res) => {
  res.end('<h1> This is server  </h1>');
});
/*
Upon a request that is sent to the home folder, 
the user will be sent this h1 tag. 
*/
// conclusion of router review. 

module.exports = router;
