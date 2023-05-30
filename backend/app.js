const express = require("express");
const bodyParser = require("body-parser");

const placesRoute = require("./routers/places-route");

const app = express();

app.use("/api/places", placesRoute);

app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500).json({message: error.message || "An unknow error occured!"})
});

app.listen(5000);
