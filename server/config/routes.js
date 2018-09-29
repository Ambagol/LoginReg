 
var home = require('../controller/homecontroller.js'); 
module.exports = function(app){ 
//routing 
app.post('/registerUser', function(req,res){ 
    console.log("Registering from Routes");
    home.registerUser(req, res)
} )

app.post('/loginUser', function(req, res){ 
    console.log("logging in from routes");
    
    home.loginUser(req,res)
})


} 
