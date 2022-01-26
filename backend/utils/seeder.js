const dotenv= require("dotenv");

const Patient = require("../models/apointment")

const databaseConnection =require("../config/database");
const patients = require("../data/data.json")

dotenv.config({path: "backend/config/config.env"})

databaseConnection();

const seedProducts= async()=>{
    try{
        await Patient.deleteMany();
        console.log("All patient has deleted");

        await Patient.insertMany(patients);
        console.log("all are added to DB")
        process.exit()

         

    }catch(err){
        console.log(err.message);
        process.exit()
    }

}

seedProducts();