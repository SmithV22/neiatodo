
const mongoose = require('mongoose') ;
const db = process.env.MONGO_URI ;
const dotenv = require('dotenv').config({ path: '../.env'}) ;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline) ;
    } catch (error) {
        console.log(error) ;
        process.exit(1)
    }
}

module.exports = connectDB 