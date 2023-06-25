const mongoose = require('mongoose')
const dbConnection = async()=>{
    try{
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports  = dbConnection