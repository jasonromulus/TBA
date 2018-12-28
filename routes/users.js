const express = require('express');
const router = express.Router();
const user = require('../models/user')

//Register
router.get('/register', function(req,res){
    res.render('register');
});

//Login
router.get('/login', function(req,res){
    res.render('login');
});

//Register Users
router.post('/register', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    // console.log(email);

    //Validation
    req.checkBody('name', 'You have to put a name').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Vaild Email is required').isEmail();
    req.checkBody('username', 'You have to put a username').notEmpty();
    req.checkBody('Password', 'Password is required').notEmpty();
    req.checkBody('Password2', 'Passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();

    if(errors){
        res.render('register',{
            errors:errors
        })
    } else {
        const newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password,
        });

        User.createUser(newUser, function(err, user){
            if(err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'You are registered. Please login now!');

        res.redirect('/users/login');
    }
});

module.exports = router;