const express 	= require("express");
const path 		= require('path');

const app = express();
const port = 8000;


const users = [
	{cName: 'Adam', sName: 'Smith'},
	{cName: 'Ben', sName: 'Davis'},
	{cName: 'Colin', sName: 'Banks'},
	{cName: 'Dave', sName: 'Yerkess'},
	{cName: 'Ed', sName: 'Millar'}
];


app.get('/api/users', (req, res) => {

	date = new Date();
	console.log('API data request on: /api/users on: ' + date);

	res.json(users);
});



app.listen(port, () => {
	console.log("Listening on port " + port);
});