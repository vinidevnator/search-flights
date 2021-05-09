import flightsModel from '../../models/Flights.js';

// Add a new flight to database
export const servicesFlightAdd = (fromCity, toCity, dateFlight, companyAir) => {
    flightsModel.create({ from: fromCity, to: toCity, date: dateFlight, company: companyAir});
}

// Retrieve results of flights
export async function servicesFlightSelect (departure, fromCity, toCity) {
    return await flightsModel.findAll({where: { date: departure, from: fromCity, to: toCity }});
}