const User = require('../models/user')
const {validationResult} = require("express-validator")
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

//SIGN UP Controller
exports.signup = (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
    const user = new User(req.body)
    user.save((err,user) => {
        if(err){
            return res.status(400).json({err:"Not abl to save user in database"})
        }
            res.json({
                name:user.name,
                email:user.email,
                id:user._id
            })
    })
}
//SIGN IN Controller
exports.signin = (req,res) => {
    const {email,password} = req.body;
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()[0].msg
        })
    }
    User.findOne({email}, (err,user) => {
       if(err || !user){
            return res.status(400).json({
                error :" USER Email does not exit "
            })
       }

        if(!user.authenticate(password)){
            return res.status(401).json({
                error :" Email and password do not match "
        })
        }

        const token = jwt.sign({_id:user._id},process.env.SECRET)

        res.cookie('token',token, {expire: new Date() + 9999})
        const { _id, name, email, role} = user ;
        return res.json({token, user:{ _id, name, email, role}})
    })
};
//SIGN OUT Controller
exports.signout = (req,res) => {
    res.clearcookie('token')
    res.json({message:"User SignOut Successfully"})
}
//Protected Route
exports.isSignedIn = expressJwt({
    secret : process.env.SECRET,
    userProperty : "auth",
    algorithms: ['HS256']
})

// Custom Middleware
exports.isAuthenticate = (req,res,next) => {
    let check = req.profile && req.auth && req.profile._id == req.auth._id ;
    if(!check) {
        return res.status(403).json({
            error : "ACCESS DENIED"
        })
    }
    next()
}

exports.isAdmin = (req,res,next) => {
    if(req.profile.role === 0){
        return res.status(403).json({
            error: "you are not ADMIN access denied"
        })
    }
    next()
}