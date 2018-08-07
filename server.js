const express 	= require("express");
const path 		= require('path');

const app = express();
const port = 8000;


const users = [
	{id: '1', cName: 'Adam', sName: 'Smith'},
	{id: '2',cName: 'Ben', sName: 'Jones'},
	{id: '3',cName: 'Colin', sName: 'Banks'},
	{id: '4',cName: 'Dave', sName: 'Yerkess'},
	{id: '5',cName: 'Ed', sName: 'Millar'}
];


app.get('/api/users', (req, res) => {
	console.log('API data request on: /api/users ');

	res.json(users);
});



app.listen(port, () => {
	console.log("Listening on port " + port);
});