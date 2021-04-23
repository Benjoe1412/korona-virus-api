const axios = require('axios').default
const parseCsv = require('csv-parse')
const { promisify } = require('util')
const parseCsvAsync = promisify(parseCsv)

const TYPES = ['confirmed', 'deaths', 'recovered']

const URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19__TYPE__global.csv';


//https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19__TYPE__global.csv

async function download(type){
    const url = URL.replace('_TYPE_',type);
    const res = await axios.get(url);
    return res.data;
}


async function parse(data) {
    const records = await parseCsvAsync(data, { from_line: 2 })
        
        const locations = records.map(record => {
            const [ state,country,latitude,longitude, ...values ] = record;
            
            const id = `${state}-${country}`;


             return {
                 id,
                 state,
                 country,
                 latitude: parseInt(latitude),
                 longitude: parseInt(longitude),
                 values: values.map(value => parseInt(value)),
             }
        });
const locationsById = locations.reduce((acc, val) => {
    acc[val.id] = val;
    return acc;
}, {})
        return locationsById;
}


async function downloadAndParse(){
    const locationsByType = {};

    for (const type of TYPES){
        const data = await download(type);
        locationsByType[type] =  await parse(data);
    }
    const locations = Object.keys(locationsByType.confirmed).map(id => {
        const confirmed = locationsByType.confirmed[id] || { values: []};
        const deaths = locationsByType.deaths[id] || { values: []};
        const recovered = locationsByType.recovered[id] || { values: []};
        return {
            id,
            stae: confirmed.state,
            country: confirmed.country,
            latitude: confirmed.latitude,
            longitude: confirmed.longitude,

            confirmed: confirmed.values,
            deaths: confirmed.values,
            recovered: confirmed.values

        };
    });

return locations;

}
export default {
    download,
    parse,
    downloadAndParse

}