const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recorderSchema = new Schema ({
    userID : { type: String, required: true},    
    date : { type: Date, required: true },
    weight: {type: Number, required: false},
    calorie_A : {type: Number, required: false},
    calorie_B: {type: Number, required: false},
    calorie_C: {type: Number, required: false},
},{
    timestamps : true,
});

const Recorder = mongoose.model( 'recorder', recorderSchema );

module.exports = Recorder;