const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age: Number,
    city: String, 
    Team: String
})

const VenuesSchema = new Schema({
    name: String,
    adress: String,
    city: String, 
    DTSA: Boolean
})

const VenuesSchema = new Schema({
    name: String,
    adress: String,
    Phone: Number,
    DTSA: Boolean
})

const GamesSchema = new Schema({
    List: Array,
    Speaker: Boolean
})



const UserModel = mongoose.model('User', UserSchema)
const VenuesModel = mongoose.model('Venues', VenuesSchema)
const GamesModel = mongoose.model('Games', GamesSchema)


module.exports = {
    User: UserModel,
    Venues: VenuesModel,
    Games: GamesModel
}
