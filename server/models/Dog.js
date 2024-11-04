// require mongoose, a popular MongoDB library for nodejs
// Mongoose connects in the app.js file. Once mongoose is connected,
// it stays connected across all of the files in this project
// As long as you import this after you have connected,
// then mongoose will give you the active DB connection which is what we want
const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 1,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
