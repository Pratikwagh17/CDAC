require('dotenv').config();

const bodyParser = require('body-parser');
const con = require('./connection');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home Route
app.get('/', (req, res) => {
    res.send("Simple GET request");
});

// GET All Users
app.get('/user', (req, res) => {
    con.query("SELECT * FROM users", (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

// GET User By ID
app.get('/user/:id', (req, res) => {
    con.query(
        "SELECT * FROM users WHERE id = ?",
        [req.params.id],
        (error, result) => {
            if (error) throw error;
            res.send(result);
        }
    );
});

// INSERT User
app.post('/users', (req, res) => {
    const { name, post, salary } = req.body;

    const insertQuery =
        "INSERT INTO users(name, post, salary) VALUES(?, ?, ?)";

    con.query(
        insertQuery,
        [name, post, salary],
        (error, result) => {
            if (error) throw error;
            res.send(result);
        }
    );
});

// UPDATE User
app.put('/users/:id', (req, res) => {
    const { name, post, salary } = req.body;

    const updateQuery =
        "UPDATE users SET name=?, post=?, salary=? WHERE id=?";

    con.query(
        updateQuery,
        [name, post, salary, req.params.id],
        (error, result) => {
            if (error) throw error;
            res.send(result);
        }
    );
});

// DELETE User
app.delete('/users/:id', (req, res) => {
    con.query(
        "DELETE FROM users WHERE id=?",
        [req.params.id],
        (error, result) => {
            if (error) throw error;
            res.send(result);
        }
    );
});

app.listen(port, () => {
    console.log(`Server started on ${host}:${port}`);
});