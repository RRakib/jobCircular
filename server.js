// Required Files
const express = require("express");
const db = require("./Config/database")

// Connecting TO PostgreSQL
db.authenticate()
    .then(res => {
        console.log("Connected to Postgresql")
    })
    .catch(err => {
        console.log("ERROR!! " + err)
    })

// Middle Ware
const app = express();

// Listening To PORT
const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})