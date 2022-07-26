import express from 'express';

const app = express();
const PORT = 3030;
app.use(express.json());

// routes go here
app.get('/', (req, res) => {
    res.send('express is working')
});


app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}...`)
})
