const { Author, Book } = require("../models/User");

const authorController = {
    // create a author
    createAuthor: async (req, res) => {
        res.status(200).json(req.body);
    },
};


module.exports = authorController;