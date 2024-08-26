const express = require("express");
const router = express.Router();

const authorController = require("../controllers/user");


// create a author
router.post("/", authorController.createAuthor);


module.exports = router;