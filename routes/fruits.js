const express = require('express')
const router = express.Router();
const { getAllFruits, createFruit, getOneFruit, deleteFruit, updateFruit } = require("../controllers/fruits");
const { validatorCreateFruit } = require("../validators/fruits");

//post
router.post("/", validatorCreateFruit, createFruit);

//get all
router.get("/", getAllFruits);
    
// GET ONE
router.get("/:id", getOneFruit);

// DELETE ONE
router.delete("/:id", deleteFruit);

// PUT
router.put("/:id", validatorCreateFruit, updateFruit);


module.exports = router;