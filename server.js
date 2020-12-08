const express = require('express');
var cors = require('cors');
var data = require('./data');
var bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Welcome to Image Quiz API quiz id');
});
app.get('/quizzes', (request, response) => {
    let metadata = data.quizzes.map(x => {
        return {name: x.name, id: x.id, picture: x.picture};
    });

    response.json(metadata);
});
app.get('/quizzes/:id', (request, response) => {
    response.send('Welcome to Image Quiz API quiz id');
});
app.post('/score', (request, response) => {
    let username = request.body.username;
    let quizid = request.body.quizid;
    let score = request.body.score;
    data.scores.push({score: score, quizid: quizid, username: username});
    response.json({message: 'The score was added successfully.'});
});


app.listen(port, () => {
    console.log('Image Quiz API listening on port ${port}!')
})