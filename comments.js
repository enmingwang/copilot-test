//Create web server
const express = require('express');
const app = express();
app.use(express.json());

//create a list of comments
let comments = [
    {id: 1, author: "John", content: "Hello"},
    {id: 2, author: "Mary", content: "Hi"},
    {id: 3, author: "Jane", content: "Hey"}
];

//GET /comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//GET /comments/:id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if(!comment) res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

//POST /comments
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
