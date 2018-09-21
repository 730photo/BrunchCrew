const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GamesSchema = new Schema({
    list: Array,
    speaker: Boolean
})

const VenuesSchema = new Schema({
    name: String,
    address: String,
    phone: Number,
    dtsa: Boolean,
    games: [GamesSchema]
})

const UserSchema = new Schema({
    name: String,
    age: Number,
    city: String, 
    team: String,
    venues: [VenuesSchema]
})



const UserModel = mongoose.model('User', UserSchema)
const VenuesModel = mongoose.model('Venues', VenuesSchema)
const GamesModel = mongoose.model('Games', GamesSchema)


module.exports = {
    User: UserModel,
    Venues: VenuesModel,
    Games: GamesModel
}
