const express 	= require("express");
const path 		= require('path');

const app = express();
const port = 8000;


const users = [	
	{cName: 'Colin', sName: 'Banks'},
	{cName: 'Ben', sName: 'Davis'},
	{cName: 'Dave', sName: 'Yerkess'},
	{cName: 'Adam', sName: 'Smith'},
	{cName: 'Ed', sName: 'Millar'},
];


app.get('/api/users', (req, res) => {

	date = new Date();
	console.log('API data request on: /api/users ' + date);

	res.json(users);
});



app.listen(port, () => {
	console.log("Server.js listening on port: " + port);
});