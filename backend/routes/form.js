const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Handle form submission
router.post('/', async (req, res) => {
  const { fullName, employeeNo, date, shift, route, destination, estate, phoneNo } = req.body;
  
  const newForm = new Form({
    fullName,
    employeeNo,
    date,
    shift,
    route,
    destination,
    estate,
    phoneNo
  });

  try {
    await newForm.save();
    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch all form submissions
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

module.exports = router;