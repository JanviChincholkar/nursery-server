import express from "express";
import dotenv from "dotenv"
dotenv.config()

import {getHealth} from "./controllers/health.js"
import {postPlant,
        getPlants,
        getPlantId,
        putPlantId,
        deletePlantId}
         from "./controllers/plant.js";

import {handlePageNotFound} from "./controllers/error.js"         

const app = express()
app.use(express.json())

app.get("/health", getHealth )

app.post("/plant", postPlant)
app.get("/plants", getPlants)
app.get("/plant/:id", getPlantId )
app.put("/plant/:id", putPlantId)
app.delete("/plant/:id", deletePlantId)

app.use("*", handlePageNotFound)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})