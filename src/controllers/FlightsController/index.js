import { servicesFlightAdd, servicesFlightSelect } from '../../services/flights/index.js';

// Controller Flight
export default {
    async create(request, res) {
        if (request.method === 'POST') {
            const fromCity = request.body.from;
            const toCity = request.body.to;
            const dateFlight = new Date(request.body.date);
            const companyAir = request.body.company;

            // Check if fields are with content and exists
            if (fromCity && toCity && dateFlight && companyAir) {
                servicesFlightAdd(fromCity, toCity, dateFlight, companyAir);
                res.json({ status: 'Success' });
            } else {

                res.json({ status: 'Failed insert data of flight' });
            }
        } else {
            res.end();
        }
    },
    async select(request, res) {
        if (request.method === 'GET') {
            const departure = new Date(request.query.departure);
            const fromCity = request.query.from;
            const toCity = request.query.to;

            // Check if fields are with content and exists
            if (fromCity && toCity && departure) {
                const queryDB = await servicesFlightSelect(departure, fromCity, toCity);
                res.json(queryDB);
            } else {
                res.json({ status: 'Failed fetch data of flight' });
            }
        } else {
            res.end();
        }
    },
}