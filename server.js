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

app.get('/', (req, res) => {
    res.send(`
      <h1>Server has started and API is Working</h1>
      <p>Refer to the Postman Docs here: <a href="https://documenter.getpostman.com/view/37397155/2sA3rwLDt1">Postman Documentation</a></p>
    `);
  });
  
  const mongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  sslValidate: true,
      });
      console.log("MongoDB Database connected Successfully!");
    } catch (err) {
      console.log("Failed to connect to MongoDB:", err);
      throw err;
    }
  }
  
  app.listen(PORT, () => {
    mongoDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
  
  const startServer = async () => {
    await mongoDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  };
  
  startServer();