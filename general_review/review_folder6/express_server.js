const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 
// basic server started, config for setting views to be created next. 

const expressHandleBars = require('express-handlebars'); 

// set the view engine configuration to use handlebars 
app.engine('handlebars', expressHandleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// view engine set up. routing for views next. 







app.listen(PORT, () => {
  console.log(`Server running, started on PORT ${PORT}, press ctrl+c to end.`)
})