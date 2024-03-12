const express = require("express");                      //  this line imports Express.js library
const res = require("express/lib/response");        // this line imports the response object from the Express library 
const app = express();                               // this line creates an instance for express application
const addTwoNumber = (n1, n2) => {                    // it creates a function to add two number which takes n1 and n2 and returns their sum
    return n1 + n2;
}
app.get("/addTwoNumber", (req, res) => {               // it Define a route to handle GET requests at the '/addTwoNumber' endpoint 
    const n1 = parseInt(req.query.n1);                // it parses the query parameters n1 and n2 to integers from the request URL 
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);               // it calls the addTwoNumber function to add the two numbers and stores it in result
    res.json({ statuscode: 200, data: result });      // it sends a JSON response with the sum of the two numbers
});
console.log(addTwoNumber(19, 12));                     // it logs the result of adding two numbers 
const port = 3040;                                      // it specify the port number for the server 
app.listen(port, () => {                                  // it starts the express server on the specified port and logs a message indicating that it's listening on the specified port.
    console.log("hello i'm listening to port " + port);
})