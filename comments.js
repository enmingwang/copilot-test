//generate web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse incoming request
app.use(bodyParser.json());

//create a comments array
const comments = [
    {username: 'Tom', comment: 'Hello'},
    {username: 'Lucy', comment: 'Hi'}
];

//create a new comment
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.json({ msg: 'comment added' });
});

//get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});