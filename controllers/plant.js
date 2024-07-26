(req, res) => {
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