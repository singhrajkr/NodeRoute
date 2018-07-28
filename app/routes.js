var express                     = require('express'),
    router                      = express.Router(),
    authenticateUsersMiddleware = require('./middleware/usersAuthentication'),
    siteController              = require('./controllers/site.controller'),
    dashboardController         = require('./controllers/dashboard.controller'),
    path                        = require('path'),
    mysqldb                     = require('./mysql');


//Export the Router
module.exports = router;

////////////////Site Routes Goes Here   ========================================================
router.get('/',             siteController.homePage);
router.get('/about',        siteController.aboutPage);
router.get('/contact',      siteController.showContact);
router.post('/contact',     siteController.processContact);
router.get('/page',         siteController.indexPage);
router.get('/myjson',       siteController.jsonPage);
router.get('/:username',    siteController.usernamePage);
router.get('/@:username',   siteController.atUsernamePage);
router.get('/@:username/:blog_post', siteController.atUsernameBlogPage);
router.get('/register',     siteController.signUpPage);
router.post('/register',    siteController.processSignUp);
//middleware test
// Check the user exists/is valid for following route  http:localhost:8080/Raj/profile
// router.get('/:user/:profile', checkUserExists,
router.get('/:user/:profile', authenticateUsersMiddleware, siteController.userProfile);




//////////// Dashboard Routes Goes Here =========================================================
router.get('/dashboard',         dashboardController.showDashboard);


//////////// API Routes Goes Here =========================================================


///////////404- Catch All =======================================================================
//   Defining 404 Page when user hits non-existance route like Middleware

router.use(siteController.pageNotFound);













 



