import express from "express";
import cors from 'cors';
import routes from './routes.js';
import seedPopulate from './seed/index.js';

const app = express();

// Enable cors
app.use(cors());

// Only request body format json
app.use(express.json());
app.use(routes);

// Create a table flights and seed
seedPopulate();

// Server listen on port 3000
app.listen(3000);