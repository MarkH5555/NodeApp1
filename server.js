const express = require("express");

const app = express();

const port = 8000;

const path = require('path');

// Adding this next line removes the need to add get functions to serve the html and css
app.use(express.static('public'));





app.listen(port, () => {
	console.log("Listening on port " + port);

})