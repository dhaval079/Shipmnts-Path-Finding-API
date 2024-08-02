const express = require('express');
const router = express.Router();
const roadController = require('../controllers/roadController');
const { authentication } = require('../middlewares/authMiddleware');

router.post('/', authentication, roadController.addRoad);

module.exports = router;