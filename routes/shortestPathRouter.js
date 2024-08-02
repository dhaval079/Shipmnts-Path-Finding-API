const express = require('express');
const { getShortestPath } = require('../controllers/shortestPathController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getShortestPath);

module.exports = router;
