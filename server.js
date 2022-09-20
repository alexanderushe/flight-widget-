const PORT = 5500
const axios = require("axios").default
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())

app.get('/flights', (req,res)=>{

    const options = {
        method: 'GET',
      url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
      headers: {
        'X-RapidAPI-Key': process.env.Rapid_API_KEY,
        'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
    }
    };
        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data.slice(1,5));
        }).catch(function (error) {
            console.error(error);
        });
})
app.listen(PORT),()=> console.log('running on port '+PORT)