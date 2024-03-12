var express = require("express")                     //  this line imports Express.js library 
var app = express()                                  // this line creates an instance for express application
var port = process.env.port || 3000;                 // it specify the port number for the server 
app.listen(port,()=>{                                 // it starts the express server on the specified port and logs a message indicating that App listening to the specified port.
console.log("App listening to: "+port)
})