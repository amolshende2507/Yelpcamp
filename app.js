const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const methodOverride = require('method-override')




mongoose.connect('mongodb://localhost:27017/yelp-camp',{

    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("We are connected to MongoDB!");
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home');
});

// app.get('/makecampground', async(req, res) => {
//     const camp = new Campground({title:'My Backyard', description:'cheap camping'});
//     await camp.save();
//     res.send(camp)
// })
// ;

app.get('/campground', async(req,res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index' , {campgrounds})
})
app.get('/campgrounds/new', (req,res)=>{
    res.render('campgrounds/new');
})

app.post('/campgrounds',async (req,res)=>{
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
})

app.get('/campgrounds/:id', async(req,res)=>{
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show',{campground});
})

app.get('/campgrounds/:id/edit',async(req,res) =>{
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit',{campground});
} )

app.put('/campgrounds/:id' ,async(req ,res) =>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id,{...req.body.campground})
    res.redirect(`/campgrounds/${campground._id}`)
})

app.delete('/campgrounds/:id' ,async(req ,res) =>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    res.redirect('/campground/');
})



app.listen(3000, () => {
    console.log("Server running on port 3000");
});




