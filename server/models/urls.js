const mongoose = require('mongoose')

const Schema = mongoose.Schema

const URLModel = new Schema({
    url : {type: String , unique: true},
})

module.exports = mongoose.model('urls' , URLModel)