const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get( (req, res)=>{ 
    User.find()
        .then( users=> res.json(users) )
        .catch ( err=> res.status(400).json('Errors' + err) );
} );

router.route('/add').post( (req, res)=>{ 
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const profileURL =req.body.profileURL;
    const newUser = new User({email, password, firstname, lastname, profileURL});

    newUser.save()
        .then( ()=> res.json('User added!'))
        .catch( err=> res.status(400).json('Hello Errors' + err))
} );

router.route('/updatepassword').post((req, res)=>{
    User.findByIdAndUpdate({ _id : req.body.id},{ password : req.body.password },{ new: true},(err,data)=>{
        if(err){
            res.status(400).json('Error'+err);
        }else{
            res.json('password changed successfully');
        }
    });
});

module.exports = router;
