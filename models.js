const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/peopletube', {
    useNewUrlParser: true, 
    useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
      // we're connected!
});


const Schema = mongoose.Schema

const PeopleSchema = new Schema({
    name:String
})

const People = mongoose.model('people', PeopleSchema)

module.exports = People