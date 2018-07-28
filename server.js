var app = require('express')(),
port = process.env.PORT || 8040,
morgan = require('morgan'),
bodyParser = require('body-parser');
var mysql = require('./app/mysql');

///////////////////Configure : Run morgan first, Body-Parser then AuthenticateUser middleware
//To avoid Home Page Authentication Just Use >> app.use(authenticateUser); after home page route.

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

//Set Middleware (Using authenticateUser here ) for Overall Application. 
// So comment Middleware AuthenticateUser and use it after home route.
// app.use(authenticateUser);



//Set Node Style Routes
var router = require('./app/routes');
//OR app.use(require('./app/routes'));
app.use(router);


// Using Middleware below Home Page Route to avoid Authentication for Home Page.
// app.use(authenticateUser);

// Following are Middlewares (Mostly used for Authentication)
// function authenticateUser(req,res,next){
//     //make sure the user is authenticated
//     //req.params.token
//     console.log('Authenticating Users');
//     next();
// }

// function checkUserExists(req,res,next){
//     console.log(req.params);
//     //Validation
//     //Check the Database
//     // var user = User.findOne({username: req.params.username});
//     // if(! user)
//     next();
// }


//Start The Server
app.listen(port,function(){
    console.log(`App is Listening on http://localhost:${port}`);
})