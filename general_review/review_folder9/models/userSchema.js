// This JS file contains the configuration for adding users to the MongoDB database. 
const mongoose = require('mongoose')
// mongoose imported to create the schema. 

const Schema = mongoose.Schema; 
// schema constant set to mongoose.schema method. 

const userSchema =  new Schema({
  firstname:{
    type:String, 
    // String type 
    required:[true, "A first name is required"]
    // required value set to true, with message. 
  }, 
  lastname:{
    type:String, 
    //string type 
    required:[true, "A last name is required. "]
    // required value set to true with message. 
  }
})
// A schema is now created, with two fields, firstname lastname. 