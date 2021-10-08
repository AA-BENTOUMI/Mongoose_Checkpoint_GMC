const mongoose = require("mongoose");
// this is the model of the person
const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favoritFoods: Array,
});

module.exports = mongoose.model("person", personSchema);
