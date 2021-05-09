import { Router } from "express";
import FlightsController from './controllers/FlightsController/index.js'

const routes = Router();

// Routes to flight
routes.post('/flights', FlightsController.create);
routes.get('/flights', FlightsController.select);

export default routes;