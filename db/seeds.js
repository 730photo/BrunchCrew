require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})

const Schema = require('./schema')

const { User } = Schema
const { Venues } = Schema
const { Games } = Schema


const game = new Games({
    list: ['Falcons', 'Saints'],
    speaker: true
})

const tacoMac = new Venues({
    name: 'Taco Mac',
    address: '983 Peachtree St. NE',
    phone: 6789047211,
    dtsa: true,
    games: [game]
})

const reg = new User({
    name: 'Reg',
    age: 26,
    city: 'Atlanta',
    venues: [tacoMac]
})

User.remove()
    .then(() => {
       return reg.save()      
    })
    .then(() => {
        console.log('complete')
        mongoose.connection.close()
    })





