const express = require("express");
const cors = require("cors");
const app = express();
const usersController = require("./controllers/usersController");
const resourcesController = require("./controllers/resourcesController");

app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/resources", resourcesController);

app.get("/", (req, res) => {
    res.send("Welcome to our Capstone Project");
});

app.get("*", (req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;