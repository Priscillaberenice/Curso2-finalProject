const { check, validationResult } = require('express-validator')

const validatorCreateFruit = [
    check("name").exists().notEmpty().isLength({ min: 3 , max: 40}),
    check("origin").exists().notEmpty(),
    check("season").exists().notEmpty(),
    check("mature").exists().notEmpty().isBoolean(),
    (req, res, next) => {
        try{
            validationResult(req).throw()
            return next()
            }catch(err){
                res.status(403).send({errors : err.array()})
                }
            }
    ]

module.exports = { validatorCreateFruit }