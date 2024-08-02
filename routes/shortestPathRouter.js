const express = require('express');
const router = express.Router();
const shortestPathController = require('../controllers/shortestPathController');
const { authentication } = require('../middlewares/authMiddleware');

router.get('/', authentication, shortestPathController.getShortestPath);

module.exports = router;