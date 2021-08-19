const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://csc302:csc302@cluster0.fpqz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((e) => {
        console.error("Connection error", e.message);
    });
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;

module.exports = db;
