import express from 'express';
import { getAllCars } from './src/cars.js';

const app = express();
const PORT = 3030;
app.use(express.json());

// routes go here
app.get('/', (req, res) => {
    res.send('express is working')
});

app.get('/cars', getAllCars)

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}...`)
})

