const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const limitationSchema = new Schema ({
    userID : { type: String, required: true},    
    limitation: {type: Number, required: true},
},{
    timestamps : true,
});

const Limitation = mongoose.model( 'limitation', limitationSchema );

module.exports = Limitation;