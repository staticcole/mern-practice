const Workout = require('../models/workoutModel.js')
const mongoose = require('mongoose')


//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createWorkout: -1})

    res.status(200).json(workouts)
}

//get single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    //ID validation
    if (!mongoose.isObjectIdOrHexString(id)) {
        return res.status(404).json({mssg: "ID is not valid"})
    }

    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({mssg: "No such workout"})
    }
    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    //add doc to a db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.isObjectIdOrHexString(id)) {
        return res.status(404).json({mssg: "ID is not valid"})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    if (!workout){
        return res.status(404).json({mssg: "No such workout"})
    }
    res.status(200).json(workout)
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.isObjectIdOrHexString(id)) {
        return res.status(404).json({mssg: "ID is not valid"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})
    if (!workout){
        return res.status(404).json({mssg: "No such workout"})
    }
    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}