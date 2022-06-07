const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const employees = {
    '1596182': {
        'firstName': 'Danielle',
        'lastName': 'Rader',
        'department': 'engineering',
        'supervisor': 'Ted Bonham',
        'position': 'Electronic Technician',
        'Salary': '48.61/hr',
    },
    'unknown': {
        'firstName': 'unknown',
        'lastName': 'unknown',
        'department': 'unknown',
        'supervisor': 'unknown',
        'position': 'unknown',
        'Salary': 'unknown',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:id', (req, res) => {
    const employeeID = req.params.id
    if (employees[employeeID]) {
        res.json(employees[employeeID])
    } else {
        res.json(employees['unknown']);
    }
});


app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Running on port ${PORT}`)
});