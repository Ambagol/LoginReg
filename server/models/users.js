var mongoose = require("mongoose"), 
  Schema = mongoose.Schema, 
  UserSchema = new Schema({ 
    name: {type :String,required:true, default:""},
    email: {type:String,required:true,unique:true},
    password: {type:String, required:true},
    cpassword:{type:String, required:true},
  }) 
mongoose.model('User', UserSchema); 
