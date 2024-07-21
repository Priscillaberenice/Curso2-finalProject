const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema(
    {
        name: {
            type: String,

        },
        origin: {
            type: String
        },
        season: {
            type: String
        },
        mature: {
            type: Boolean
        },
        id: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('fruits', fruitSchema)