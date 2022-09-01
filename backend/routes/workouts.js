const express = require('express')

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({
        mssg: 'GET all workouts',
        key: 'value'
    })
})

//get single wourkout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    //req.body()
    res.json({mssg: 'POST new workout'})
})

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//PATCH a new workout
router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE a workout',})
})

module.exports = router
