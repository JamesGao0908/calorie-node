const router = require('express').Router();
let Recorder = require('../models/recorder.model');


router.route('/').get( (req, res)=>{ 
    Recorder.find()
        .then( recorders=> res.json(recorders) )
        .catch ( err=> res.status(400).json('Errors' + err) )
} );

router.route('/add').post( (req, res)=>{ 
    const userID = req.body.userID;
    const date = Date.parse(req.body.date);
    const weight = Number(req.body.weight);
    const calorie_A = Number(req.body.calorie_A);
    const calorie_B = Number(req.body.calorie_B);
    const calorie_C = Number(req.body.calorie_C);
   
    const newRecorder = new Recorder({
        userID,
        date,
        weight,
        calorie_A,
        calorie_B,
        calorie_C
    });
    
    newRecorder.save()
        .then( ()=> res.json('Recorders added!'))
        .catch( err=> res.status(400).json('Errors' + err))
});

router.route('/query').post( (req, res)=>{
    Recorder.find( {userID: req.body.userID} )
        .then( recorders=>res.json(recorders) )
        .catch( err=> res.status(400).json('Error' + err) );
} );

module.exports = router;