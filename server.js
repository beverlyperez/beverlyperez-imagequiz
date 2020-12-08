const express = require('express');
var cors = require('cors');
var data = require('./data');

const app = express();

const port = process.env.PORT || 3002;

app.use(cors());

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
    response.send('Welcome to Image Quiz API SCORE');
});


app.listen(port, () => {
    console.log('Image Quiz API listening on port ${port}!')
})