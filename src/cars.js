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


//handles errors                                line 10