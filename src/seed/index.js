import fs from 'fs';
import flightsModel from '../models/Flights.js';
import parse from 'csv-parse';

const addFlights = () => {
    // Create a table
    flightsModel.sync();

    // Read file .csv to populate in database
    fs.createReadStream('seed/files/flights.csv').pipe(parse({ delimiter: ',' })).on('data', function (flight) {
            const fromCity = flight[10];
            const toCity = flight[14];
            const dateFlight = flight[4];
            const company = flight[1];
            flightsModel.create({ from: fromCity, to: toCity, date: dateFlight, company: company });
        }).on('end', function () {
            console.log('Dados criados');
        });
}

const seedPopulate = () => {
    addFlights();
}

export default seedPopulate;