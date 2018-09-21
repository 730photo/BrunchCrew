const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age: Number,
    city: String, 
    Team: String
})


const UserModel = mongoose.model('user', UserSchema)


module.exports = {
    User: UserModel
}