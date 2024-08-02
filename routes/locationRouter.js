const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const { authentication } = require('../middlewares/authMiddleware');

router.post('/', authentication, locationController.addLocation);

module.exports = router;