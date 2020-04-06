const path = require('path');
const express = require('express');
const hbs = require('hbs');
const getCity = require('./handlers/getWeather');

// Set up paths for app config
const publicDirs = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Initialize express app
const app = express();

// App config - view engine to handlebars lib and set the default view folder
app.set('view engine', 'hbs')
app.set('views', viewsPath);

// Hbs partials folder setup
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirs));


app.get('', (req,res)=>{
    res.render('index', {
        name: 'Igor'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Igor'
    })
})

app.get('/weather', async (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must enter a valid address'
        })
    }
    
    const forcast = await getCity(req.query.address);
    res.send({
        forcastData: forcast
    })
})


// Start up the server on port 3000
app.listen(3000);