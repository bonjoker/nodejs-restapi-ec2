const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

//CONNECT DATABASE
const connectDB = require("./config/db");

connectDB();


// middlewares
const errorHandler = require("./middlewares/error");
app.use(cors());
app.use(express.json());

// Routes
const authorRoutes = require("./routes/author");
app.use("/api/author", authorRoutes);

app.use("/api/book", (req, res) => {
    return res.status(200).json({
        message: 'This is new feature change, a new route for products'
    })
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.listen(5000, () => {
    console.log("server is running...");
});