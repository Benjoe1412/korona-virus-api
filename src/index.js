
const data = require('./data.js')
const timeSeries = require('./time-series.js')
const express = require('express')
const cors = require('cors')
var router = express.Router();


async function run(){
let locations = await data.downloadAndParse();

setInterval(async () => {
    locations = await data.downloadAndParse();
},1000 * 60 * 60 * 4)

let locationsTimeSeries = await timeSeries.downloadAndParse();

setInterval(async () => {
    locationsTimeSeries = await timeSeries.downloadAndParse();
},1000 * 60 * 60 * 4)

const app = express()
app.use(cors());

router.get('/data',(req, res) => {
    res.json(locations);
})

router.get('/time-series',(req, res) => {
    res.json(locationsTimeSeries);
})

router.listen(8000, () => {
    console.log('server is running')
})

router.get('/',(req,res) => {

    res.send('Hello World!');
})

}

run()