import express from 'express';
import { createCar, getAllCars } from './src/cars.js';

const app = express();
const PORT = 3030;
app.use(express.json());

// routes go here
app.get('/cars', getAllCars)

app.post('/cars', createCar)


app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}...`)
})

