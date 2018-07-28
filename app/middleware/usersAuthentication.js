module.exports = function (req, res, next) {
    console.log('Users Authentication Middleware');
    //do the user check
    //grab user from database
    // var user = User.findOne({username: req.params.username});
    checkUser = req.params.user;
    // user='Raj';
    //was no user . show 404
    // if(user!=checkUser) {
    //     res.status(404);
    //     return res.send('404 Page Not Found'); //Return will stop the process and gives 404 message.
    // }



    users = ['Hidayat', 'Raj', 'Pushpak', 'SaiTeja', 'Saif', 'Yash','Joe','Vasavi'];
    user = users.find(function(user){
            return user===checkUser;
    });
    if (!user) {
        res.status(404);
        return res.send('404 Page Not Found'); //Return will stop the process and gives 404 message.
    };











    // Attaching information to the request like JWT/username etc
    req.user = {
        username: 'Raj',
        jwt: 'vgchjs5678sdgshcjxks6728cvhvgbhsnxj'
    };

    next(); //If user is valid then do next things.
}