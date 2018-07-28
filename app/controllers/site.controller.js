var path = require('path');

module.exports = {
    homePage: homePage,
    userProfile: userProfile,
    aboutPage: aboutPage,
    showContact: showContact,
    processContact: processContact,
    signUpPage: signUpPage,
    processSignUp: processSignUp,
    indexPage: indexPage,
    jsonPage: jsonPage,
    atUsernamePage: atUsernamePage,
    atUsernameBlogPage: atUsernameBlogPage,
    usernamePage: usernamePage,
    pageNotFound: pageNotFound
};


function homePage(req, res) {
    res.send('Node Route App!');
};

function aboutPage(req, res) {
    res.send('This is About Page!');
};

function userProfile(req, res){
    console.log(req.param);
    res.send('Hey ' + req.params.user + ' You are a Valid User.*****This is your Profile*****');
};

function indexPage(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
};

function jsonPage(req, res) {
    res.json({ message: 'This is JSON Object' });
};

//Set Style Express Routing

function showContact(req, res) {
    res.sendFile(path.join(__dirname, '../../contact.html'));
};

function processContact(req, res) {
    res.send(`Hi ${req.body.name}!!! Your Email-Id Is: ${req.body.email}`);
};


function processSignUp(req, res) {
    console.log(req.body);
    res.send('Hello ' + req.body.name + ' Have a Good Day Ahead ' + ' Your Form Submitted Successfully!');
};

// http:localhost:8080/@Raj
function atUsernamePage(req, res) {
    console.log(req.param);
    res.send('/:@username parameter value =  ' + req.params.username)
};

// http:localhost:8080/Raj
function usernamePage(req, res) {
    console.log(req.param);
    res.send('/:username Parameter value = ' + req.params.username)
};

///////////////////////Grab The User Profiles and His Blog Post
// http:localhost:8080/@Raj/How-to-Code-in-NodeJs
function atUsernameBlogPage(req, res) {
    console.log(req.param);
    res.send('You are Reading ' + req.params.blog_post + ' written by ' + req.params.username);
};

function signUpPage(req, res) {
    res.sendFile(path.join(__dirname, '../../signup.html'));
}

function processSignUp(req, res) {
    res.sendFile(path.join(__dirname, '../../signup.html'));
    var post = {};
    mysqldb.query('INSERT INTO user_account SET ?', post, function (err, result) {
        if (err) throw err;
    });
}

function pageNotFound(req, res) {
    // res.sendStatus(404);
    res.status(404);
    res.sendfile(path.join(__dirname, '../../404.html'));
};





//Authentication Middleware 
// function checkUserExists(req, res) {
//     console.log(req.param);
//     res.send('Hey ' + req.params.user + ' You are a Valid User.Here is your ' + req.params.profile + '  *****This is your Profile*****');
// };