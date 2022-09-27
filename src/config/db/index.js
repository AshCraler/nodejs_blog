const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');

        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Database connection error!!!');
    }
}

module.exports = { connect };
