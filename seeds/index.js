const mongoose = require('mongoose');
const Campground = require('../models/campground')
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("We are connected to MongoDB!");
});

const sample = array => array[ Math.floor(Math.random()* array.length)]

const seedDB = async() =>{
    await Campground.deleteMany({});
        for ( let i=0; i<50; i++){
            const random1000 = Math.floor(Math.random()* 1000);
            const price = Math.floor(Math.random()* 20) + 10;
            const camp = new Campground({
                location: `${cities[random1000].city}, $${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                image: `https://picsum.photos/400?random=${Math.random()}`,
                description: "Lorem ipsum dola r sjdkbsk nskjdffn ndmbnd skdkfj",
                price
            })
            await camp.save();
        }
    
}

seedDB();