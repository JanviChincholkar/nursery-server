const postPlant =  (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    if (!name){
       return res.json({
            success : false,
            data : null,
            message : "name is required...!"
        })
    }

    if (!price){
        return res.json({
             success : false,
             data : null,
             message : "price is required...!"
         })
     }

     
     if (!category){
        return res.json({
             success : false,
             data : null,
             message : "category is required...!"
         })
     }

     
     if (!image){
        return res.json({
             success : false,
             data : null,
             message : "image is required...!"
         })
     }

     
     if (!description){
        return res.json({
             success : false,
             data : null,
             message : "description is required...!"
         })
     }
 

        const randomId =  Math.round(Math.random() * 10000)

        const newPlant = {
            id: randomId,
            name : name,
            category : category,
            image : image,
            price : price,
            description : description
        }

        plants.push(newPlant)

        res.json({
            success: true,
            data: newPlant,
            message: "Plant added successfully"
        })
        

}

const getPlants = (req, res) =>{
    res.json({
        success : true,
        data : plants,
        message : "All plants are fetched sucessfully"
    })
}

const getPlantId = (req, res) => {
    const {id} = req.params

    const plant= plants.find((p) => p.id ==id)
       

res.json ({ 
    success : plant ? true : false,
    data : plant || null,
    message : plant ? "Plant fetched sucessfully" : "Plant not found" ,
})
}

const putPlantId = (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    const {id} = req.params

let index = -1

plants.forEach((plant, i) => {
    if(plant.id == id) {
        index = i
    }
})

const newObj = {
     id,
     name,
     category,
    image,
     price,
     description
}
if (index==1){
    return res.json({
        success : false,
        message : ` Plant Not Found for id ${id} `,
        data : null
        
        })
}
else {
    plants[index] = newObj 
    return res.json({
        success : true,
        message : `Plant Updated Sucessfully`,
        data :newObj 
        
        })
}


}

const deletePlantId =  (req, res) =>{
    const{id} = req.params
    let index = -1 

    plants.forEach((plant, i) => {
        if(plant.id== id) {
            index = i
        }
    })

    if(index==1){
        return res.json({
            success : true,
            message : `plant not found with id ${id}`
        })
    }

     plants.splice(index, 1)

    res.json({
        success : true,
        message : "Plant Deleted sucessfully",
        data : null
    })
}

export {
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
};