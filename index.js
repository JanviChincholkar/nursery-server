import express from "express";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import cors from "cors"

import {getHealth} from "./controllers/health.js"
import {postPlant,
        getPlants,
        getPlantId,
        putPlantId,
        deletePlantId}
         from "./controllers/plant.js";

         import { error } from "./controllers/error.js";   

const app = express()
app.use(cors())
app.use(express.json()) 

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB connected.. : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
dbConnection();


app.get("/health", getHealth )

app.post("/plant", postPlant)
app.get("/plants", getPlants)
app.get("/plant/:id", getPlantId )
app.put("/plant/:id", putPlantId)
app.delete("/plant/:id", deletePlantId)

app.use("*", error);

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})