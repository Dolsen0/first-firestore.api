import { dbConnect } from "./dbConnect.js";

export function getAllCars(req, res){
    const db = dbConnect();
    db.collection('cars').get()
    .then(collection => {
        const cars = collection.docs.map(doc => doc.data());
        res.send(cars)
    })
    .catch(err => res.status(500).send(err))
};



//connect to db                                 line 4                            
//get all docs from cars collection             line 5
//reshape collection to array                   line 7
//send array to response                        line 8


//handle errors                                line 10



export function createCar(req, res) {
    const newCar = req.body;
    const db = dbConnect();
    db.collection('cars').add(newCar)
    .then(doc => {
        res.send(201).send({
            sucess: true,
            id: doc.id
        })
    })
    .catch(err => handleError(err, res));
}


//get new car from request body                         line 28
//connect to database                                   line 29
//add that car to cars collection                       line 30
//send back new doc id                                  line 


//function to handle errors

function handleError(err, res){
    console.log(err);
    res.status(500).send(err);
}