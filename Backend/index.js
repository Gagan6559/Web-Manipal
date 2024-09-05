const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Creta@6559',
    database: 'enquiry',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.post('/submit', (req, res) => {
    const { name, email, mobile, countryCode, dropdown1, dropdown2, dropdown3, dropdown4 } = req.body;

    const sql = 'INSERT INTO enquiry.form_data (name, email, mobile, countryCode, dropdown1, dropdown2, dropdown3, dropdown4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, email, mobile, countryCode, dropdown1, dropdown2, dropdown3, dropdown4], (err, result) => {
        if (err) {
            return res.status(500).send('Error inserting data');
        }
        res.status(200).send('Form data submitted successfully');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
