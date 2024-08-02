const express = require('express');
const router = express.Router();
const trafficController = require('../controllers/trafficController');
const { authentication, TrafficUpdate } = require('../middlewares/authMiddleware');

router.post('/updates', authentication, TrafficUpdate, trafficController.updateTraffic);

module.exports = router;