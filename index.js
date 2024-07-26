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

const app = express()
app.use(express.json())

//this is temporary db
const plants = [ 
    {
        "id": 6,
        "name": "sunflower",
        "category": "indoor",
        "image": "https://housing.com/news/wp-content/uploads/2023/03/How-to-grow-and-care-for-sunflower-plants-01.png",
        "price": "250",
        "description": "The best time to plant sunflower seeds is between April and May."
    },

    {
        "id": 8,
        "name": "Red rose",
        "category": "outdoor",
        "image": "https://m.media-amazon.com/images/I/51Tl6Jr+fXL.jpg",
        "price": "400",
        "description": "The process of extracting rose oil from flowers requires a huge amount of roses; just one gram of oil is produced from two thousand roses."
    },

    {
        "id": 7,
        "name": "Lily",
        "category": "indoor",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lilium_candidum_1.jpg/800px-Lilium_candidum_1.jpg",
        "price": "350",
        "description": "Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large and often prominent flowers. They are the true lilies."
    }
]


app.get("/health", getHealth )

app.post("/plant", postPlant)
app.get("/plants", getPlants)
app.get("/plant/:id", getPlantId )
app.put("/plant/:id", putPlantId)
app.delete("/plant/:id", deletePlantId)

app.use("*", (req, res) => {

    res.send(` <div> 
        <h1 style="text-align: center;"> 404 Not Found</h1>
       </div> `)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})