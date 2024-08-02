const cors = require('cors');
const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter')
const locationRouter = require("./routes/locationRouter");
const trafficRouter = require("./routes/trafficRouter");
const shortestPathRouter = require("./routes/shortestPathRouter");
const trafficConditionRouter = require("./routes/trafficConditionRouter");
const PORT = process.env.PORT || 3000;
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1", authRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/road", roadRouter);
app.use("/api/v1/traffic", trafficRouter);
app.use("/api/v1/shortest_path", shortestPathRouter);
app.use("/api/v1/traffic_condition", trafficConditionRouter);

const mongoDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Database connected Successfully!");
  } catch(err){
    console.log(err);
    throw err;
  }
}

app.listen(PORT, (req,res) => {
  mongoDB();
  console.log(`Server is created and running on site http://localhost:${PORT}`);
});
