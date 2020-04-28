const Workout = require('../models/Workout');

module.exports = function(app) {
    app.get('/api/workouts', (req, res) => {
        Workout.find({}, (err, results) => {
            if(err) console.log(err);
            res.json(results);
            console.log(results);
        });
    });

    app.post('/api/workouts', (req, res) => {
        console.log(req.body);
        Workout.create(req.body, (err, results) =>{
            if(err) console.log(err);
            res.json(results);
            console.log(results);
        });
    });

    app.put('/api/workouts/:id', (req, res) => {
        console.log(req.body);
        console.log(req.params.id);
        Workout.updateOne({
            _id: req.params.id
        },
        {
            $push: {
                exercises: req.body
            },
            $inc: {
                totalDuration: req.body.duration
            }
        }, (err, results) => {
            if(err) console.log(err);
            res.json(results);
            console.log(results);
        });
    });

    app.get('/api/workouts/range', (req, res) => {
        Workout.find({},  (err, results) => {
            if(err) console.log(err);
            res.json(results);
            console.log(results);
        });
    });
}