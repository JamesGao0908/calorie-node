const router = require('express').Router();
const jwt = require('jsonwebtoken');

let User = require('../models/user.model');

router.route('/').post( (req, res)=>{ 
    User.findOne( {email: req.body.email , password:req.body.password} )
        .then( (user)=>{
            if(user){
                let token = jwt.sign( {name:user.email}, process.env.ACCESS_TOKEN_SECRET , {expiresIn : '1w'} );
                res.json({
                    message:'Login Successfully',
                    success:'OK',
                    data: user,
                    token,
                })
            }else{
                res.json({
                    message:'Login Failed',
                    success:'NO',
                })
            }
        } )
        .catch( (err)=>{
            res.json({
                message:'Login failed',
                success:'NO',
                data: err,
            })
        }) 
});

router.route('/post').post( (req, res)=>{ 
    User.findOne( {email: req.body.email} )
    .then( (user)=>{
        if(user){
            let token = jwt.sign( {name:user.email}, process.env.ACCESS_TOKEN_SECRET , {expiresIn : '1w'} );
            res.json({
                message:'Login Successfully',
                success:'OK',
                data: user,
                token,
            })
        }else{
            res.json({
                message:'Login Failed',
                success:'NO',
            })
        }
    } )
    .catch( (err)=>{
        res.json({
            message:'Login failed',
            success:'NO',
            data: err,
        })
    }) 
});

router.route('/auto').post( (req,res)=>{
    const token = req.body.token;
    jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err)
            return res.sendStatus(403).json('Token error'+ err)
        else
            res.json({ message: 'Authenticate successfully', data: user});
    })
});


module.exports = router;