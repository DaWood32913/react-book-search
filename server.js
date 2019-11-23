// Depencencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Add routes, API and view
app.use(routes);

//Connect to the MongoDB
mongoose.connect(
    process.env.MONGOBD_URI || "mongodb://<dbuser>:<dbpassword>@ds231961.mlab.com:31961/heroku_5kfgl71f",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

//Start the API server
app.listen(PORT, () =>
  console.log('🌎  ==> API Server now listening on PORT ${PORT}!`')
);