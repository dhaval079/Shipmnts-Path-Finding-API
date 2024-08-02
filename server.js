const cors = require('cors');
const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const locationRouter = require("./routes/locationRouter");
const roadRouter = require("./routes/roadRouter");
const trafficRouter = require("./routes/trafficRouter");
const shortestPathRouter = require("./routes/shortestPathRouter");
const trafficConditionRouter = require("./routes/trafficConditionRouter");

const PORT = process.env.PORT || 3000;
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v2/", authRouter);
app.use("/api/v2/locations", locationRouter);
app.use("/api/v2/roads", roadRouter);
app.use("/api/v2/traffic", trafficRouter);
app.use("/api/v2/shortest-path", shortestPathRouter);
app.use("/api/v2/traffic-conditions", trafficConditionRouter);

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Database connected Successfully!");
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// Start server from here
app.listen(PORT, () => {
  mongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});