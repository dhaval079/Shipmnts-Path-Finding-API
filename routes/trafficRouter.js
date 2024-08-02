const express = require('express');
const { getTrafficCondition, generateTrafficReport } = require('../controllers/trafficConditionController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id', verifyToken, getTrafficCondition);
router.get('/report', verifyToken, generateTrafficReport);

module.exports = router;
