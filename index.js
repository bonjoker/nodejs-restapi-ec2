const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

//CONNECT DATABASE
const connectDB = require("./config/db");

connectDB();


// middlewares
const errorHandler = require("./middlewares/error");
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);

app.use("/api/products", (req, res) => {
    return res.status(200).json({
        message: 'New route for product'
    })
});

app.use(bodyParser.json({ limit: "50mb" }));

// middlewares
app.use(cors());
app.use(express.json());

app.use(morgan("common"));

app.use(errorHandler);

const server = app.listen(port, () =>
    console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
    console.log(`Logged Error: ${error}`);
    server.close(() => process.exit(1));
});