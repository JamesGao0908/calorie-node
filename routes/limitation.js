const router = require('express').Router();
let Limitation = require('../models/limitation.model');

router.route('/').get( (req, res)=>{ 
    Limitation.find()
        .then( recorders=> res.json(recorders) )
        .catch ( err=> res.status(400).json('Errors' + err) )
} );

router.route('/add').post( (req, res)=>{ 
    const userID = req.body.userID;
    const limitation = Number(req.body.limitation);
   
    const newDailyIntake = new Limitation({
        userID,
        limitation,
    });
    
    newDailyIntake.save()
        .then( ()=> res.json('Daily limitation added!'))
        .catch( err=> res.status(400).json('Create new limitation : ' + err))
});

router.route('/query').post( (req, res)=>{
    Limitation.findOne({userID: req.body.userID}).limit(1).sort({createdAt:-1})
    // Limitation.find( {userID: req.body.userID} )
        .then( result=>res.json(result) )
        .catch( err=> res.status(400).json('Error' + err) );
} );

module.exports = router;