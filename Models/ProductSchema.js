const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment") 
const productSchema = mongoose.Schema({
    title : String,
    image : String,
    price : Number,
})

// autoIncrement.initialize(mongoose.connection)
// postSchema.plugin(autoIncrement.plugin, "post")

const planter = mongoose.model("product", productSchema)
module.exports = planter
