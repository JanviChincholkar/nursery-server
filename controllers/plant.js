import Plant from "./../models/Plant.js";


const postPlant =  async(req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    const newPlant = new Plant({
        name,
        category,
        image,
        price,
        description
    });

    const savedPlant = await newPlant.save();


        res.json({
            success: true,
            data: newPlant,
            message: "Plant added successfully"
        })
        

}

const getPlants = async (req, res) => {
    const plants = await Plant.find().sort({ updatedAt : -1});
    res.json({
        success: true,
        data: plants,
        message: "Plants fetched successfully"
    });
};

const getPlantId = async (req, res) => {
    const { id } = req.params;
    const plant = await Plant.findById(id);

    res.json({
        success: plant ? true : false,
        data: plant,
        message: plant ? "Plant fetched successfully" : "Plant not found"
    });
};

const putPlantId = async (req, res) => {

    const  {
        name,
        category,
        image,
        price,
        description
    }  = req.body

    const { id } = req.params;

    await Plant.updateOne({_id:id},{
        $set:{
            name:name,
            category:category,
            image:image,
            price:price,
            description:description
        }
    })

     const updatedPlant = await Plant.findById(id)

    res.json({
        success:true,
        message:"plant updated successfully",
        data:updatedPlant
    })
}

const deletePlantId =  async(req, res) =>{
    const{id} = req.params
  
await Plant.deleteOne({ _id :id})
   

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