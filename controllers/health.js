const getHealth = (req, res) => {
    res.json ({
        sucesss : true,
        message: "server is running...!"
    })
}

 export { getHealth }