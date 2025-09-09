import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// });

//get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is first joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Third Joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'This is fourth joke'
        },
        {
            id: 5,
            title: 'Fifth Joke',
            content: 'This is fifth joke'
        }
    ];

    res.send(jokes);
})

//port banana / declare krna
const port = process.env.PORT || 5000;

//app ko listen kro
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});