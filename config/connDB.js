const mongoose = require('mongoose');

const connDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`Database connected successfully: ${conn.connection.host}`);
        
    } catch (error) {
        console.log("Database connection failed:", error.message);
        process.exit(1);
    }
}


module.exports = connDB;