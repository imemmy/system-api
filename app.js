const express = require('express');
const app = express();
const sequelize = require('./config/config');

const User = require('./models/user'); //vamos apagar essa linha

sequelize.sync()
     .then(
        ()=>{
            console.log('Database connected and synced');
        })
     .catch(
        (error) =>{
            console.error('Unable to corret to the database: ', error);
        }
     );


module.exports = app;