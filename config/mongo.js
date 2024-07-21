
require('dotenv').config()
const { response } = require('express');
const mongoose = require('mongoose');

const dbConnect = () => {
    const dbUri = process.env.DB_URI;
    mongoose.connect(dbUri).then((response) => {
        console.log("******************* SUCCES CONNECTION *************");
    }).catch((error) => {
        console.log(error, "---------------- ERROR CONNECTION ----------");
    });
};

module.exports = dbConnect;