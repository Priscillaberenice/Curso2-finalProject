const { fruitsModel } = require('../models/index');

//GET ALL
const getAllFruits = async(request, response) => {
    try{
        const data = await fruitsModel.find({});
            response.status(200).send({ data })
            }
    catch(error){
        console.log(error, "ERROR. CANT GET FRUITS");
        response.status(404).json({msg: "error, fruits not found"});
    }
    }

//ADD
const createFruit = async(request, response) => {
    try{
        const { body } = request
        const data = await fruitsModel.create(body)
        response.status(201).send({data})
    }
    catch(error) {
        console.log(error, "ERROR. CANT POST FRUITS");
        response.status(400).json({msg: "error, cant post a new fruit"})
    }
}

//GET ONE
const getOneFruit = async(request, response) => {
    try{
        const { id } = request.params;
        const data = await fruitsModel.findById(id)
        if(!data){
            response.status(404).json({msg: "error, fruit not found"})
            }
            else {
                response.status(200).send({ data });
            }
        }
        catch(error) {
            console.log(error, "ERROR. CANT GET FRUIT");
            response.status(404).json({msg: "error, fruit not found"})
            }
            }

//DELETE ONE
const deleteFruit = async(request, response) => {
    try{
        const { id } = request.params;
        const removedFruit = await fruitsModel.findByIdAndDelete(id)
        //se podría probar si el id existía y después borrar el ID
        if(!removedFruit){
            response.status(404).json({msg: "error, fruit not found"})
            }
            else {
                response.status(200).send({ removedFruit });
                }
                }
                catch(error) {
                    console.log(error, "ERROR. CANT DELETE FRUIT");
                    response.status(404).json({msg: "error, fruit not found"})
                    }
                    }
//UPDATE ONE
const updateFruit = async (request, response) => {
    try {
        const { id } = request.params;
        const updates = request.body;
        const options = { new: true }
        const updatedFruit = await fruitsModel.findByIdAndUpdate(id, updates, options);

        if (!updatedFruit) {
            return response.status(404).json({ msg: "Fruit not found" });
        }
        response.status(200).send({ msg: "Fruit updated successfully", updatedFruit });
    } catch (error) {
        console.log(error, "ERROR. CANT UPDATE FRUIT");
        response.status(400).json({ msg: "Error, can't update the fruit" });
    }
}

module.exports ={ getAllFruits, createFruit, getOneFruit, deleteFruit, updateFruit }