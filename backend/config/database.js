const mongoose = require("mongoose");

const databaseConnection= ()=>{
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((con) => console.log(`DB connection is successfull in PORT: ${con.connection.host}`))
    .catch((err) => {
        console.log(err)
    })
    
    
}
module.exports= databaseConnection;