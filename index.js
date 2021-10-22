const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
const handler = (req, res) => {
    res.send('wow i am happy');
}

const users = [
    { id: 0, name: 'sabana', email: 'sabana @gmail.com', phone: '017888888' },
    { id: 1, name: 'sabana', email: 'sabana @gmail.com', phone: '017888888' },
    { id: 2, name: 'sabnur', email: 'sabana @gmail.com', phone: '017888888' },
    { id: 3, name: 'srabonti', email: 'sabana @gmail.com', phone: '017888888' },
    { id: 4, name: 'sajna', email: 'sabana @gmail.com', phone: '017888888' },
    { id: 5, name: 'susmuta', email: 'sabana @gmail.com', phone: '017888888' },
    { id: 6, name: 'soniya', email: 'sabana @gmail.com', phone: '017888888' },
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {
        res.send(users)
    }
    res.send(users)
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    res.json(newUser)

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli');

})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana'])
})

app.listen(port, () => {
    console.log
        ('listening to port', port);
});
