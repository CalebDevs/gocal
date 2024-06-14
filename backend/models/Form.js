const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  employeeNo: { type: String, required: true },
  date: { type: Date, required: true },
  shift: { type: String, required: true },
  route: { type: String, required: true },
  destination: { type: String, required: true },
  estate: { type: String, required: true },
  phoneNo: { type: String, required: true }
});

module.exports = mongoose.model('Form', formSchema);