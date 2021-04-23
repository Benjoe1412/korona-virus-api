
//const data = require('./data.js')
import downloadAndParse from './data';
const timeSeries = require('./time-series.js')
const express = require('express')
const cors = require('cors')



async function run(){
let locations = await downloadAndParse();

setInterval(async () => {
    locations = await downloadAndParse();
},1000 * 60 * 60 * 4)

let locationsTimeSeries = await timeSeries.downloadAndParse();

setInterval(async () => {
    locationsTimeSeries = await timeSeries.downloadAndParse();
},1000 * 60 * 60 * 4)

const app = express()
app.use(cors());

app.get('/data',(req, res) => {
    res.json(locations);
})

app.get('/time-series',(req, res) => {
    res.json(locationsTimeSeries);
})

app.listen(8000, () => {
    console.log('server is running')
})

app.get('/',(req,res) => {

    res.send('Hello World!');
})

}

run()