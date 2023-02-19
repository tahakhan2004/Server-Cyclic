const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment") 
const productSchema = mongoose.Schema({
    latitude : Number,
    longitude: Number,
    type : String,
    Name: String,
    Email: String,
})

// autoIncrement.initialize(mongoose.connection)
// postSchema.plugin(autoIncrement.plugin, "post")

const planter = mongoose.model("product", productSchema)
module.exports = planter
