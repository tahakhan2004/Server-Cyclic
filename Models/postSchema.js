const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment") 
const postSchema = mongoose.Schema({
    title : String,
    caption : String,
    tags : String,
})

// autoIncrement.initialize(mongoose.connection)
// postSchema.plugin(autoIncrement.plugin, "post")

const poster = mongoose.model("post", postSchema)
module.exports = poster