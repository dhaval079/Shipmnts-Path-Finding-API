const jwt = require('jsonwebtoken');
const Road = require('../models/Road');

const authentication = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      (req.header("Authorization") ? req.header("Authorization").replace("Bearer ", "") : null);

    if (!token) {
      return res.status(401).json({ success: false, message: "Token Not Found" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating token",
    });
  }
};

const TrafficUpdate = async (req, res, next) => {
  try {
    const user = req.user;
    const roadId = req.body.road_id;
    const roadDoc = await Road.findById(roadId);

    if (!roadDoc) {
      return res.status(404).json({
        success: false,
        message: "Road not found",
      });
    }

    // Check if the user who created the road is the same as the authenticated user
    if (roadDoc.user.toString() !== user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this road's traffic condition",
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { authentication, TrafficUpdate };
