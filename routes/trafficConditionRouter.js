const express = require('express');
const router = express.Router();
const trafficConditionController = require('../controllers/trafficConditionController');
const { authentication } = require('../middlewares/authMiddleware');

router.get('/:id', authentication, trafficConditionController.getRoadTrafficCondition);
router.get('/report/traffic', authentication, trafficConditionController.generateTrafficReport);

module.exports = router;