const app = require("./app");

const dotenv = require("dotenv");

const databaseConnect = require("./config/database")

process.on("uncaughtExeption",err=>{
    console.log(`ERROR: ${err.message}`);
    console.log("Shutting down the server for uncaught exeption");
    
    process.exit(1);
    
})

 

//setting up config file

dotenv.config({path:"backend/config/config.env"})

//Database connection

databaseConnect();

 

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server Has Started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})

//handling unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`ERROR: ${err.stack}`);
    console.log("Shutting down the server for unhandled error rejection");
    server.close(()=>{
        process.exit(1);
    })
})