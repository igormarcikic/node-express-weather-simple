const path = require('path');
const express = require('express');

// Set up paths for app config
const viewsPath = path.join(__dirname, '../templates/views');

// Initialize express app
const app = express();

// App config - view engine to handlebars lib and set the default view folder
app.set('view engine', 'hbs')
app.set('views', viewsPath);


app.get('', (req,res)=>{
    res.render('index');
})


// Start up the server on port 3000
app.listen(3000);