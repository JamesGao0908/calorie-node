const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const recorderRouter = require('./routes/recorders');
const limitation = require('./routes/limitation');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', ()=>{ 
    console.log("MongoDB connection established!");
})

app.use('/exercises',exercisesRouter);
app.use('/recorders',recorderRouter);
app.use('/users',usersRouter);
app.use('/login',loginRouter);
app.use('/limitation',limitation);

app.listen( port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});
