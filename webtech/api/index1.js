require('dotenv').config();

const bodyParser = require('body-parser');
const con = require('./connection1');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home Route (default parameter)
app.get('/', (req, res) => {
    res.send("Simple GET request");
});

// GET All Users
app.get('/product', (req, res) => {
    con.query("SELECT * FROM product", (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

// GET User By ID
app.get('/product/:id', (req, res) => {
    con.query(
        "SELECT * FROM product WHERE id = ?",
        [req.params.id],
        (error, result) => {
            if (error) throw error;
            res.send(result);
        }
    );
});



// INSERT User
app.post('/product', (req, res) => {
    
    const { name, quantity, price, company } = req.body;

    const insertQuery =
        "INSERT INTO product(name, quantity, price,company) VALUES(?, ?, ?, ?)";

    con.query(
        insertQuery,
        [name, quantity, price,company],
        (error, result) => {
            if (error) throw error;
            res.send(result);
        }
    );
});

// UPDATE User
app.put('/product/:id', (req, res) => {
    const { name, quantity, price,company } = req.body;

    const updateQuery =
        "UPDATE product SET name=?, quantity=?, price=?,company=? WHERE id=?";

    con.query(
        updateQuery,
        [name, quantity, price,company, req.params.id],
        (error, result) => {
            if (error) throw error;
            res.send(result);
        }
    );
});

// DELETE User
app.delete('/product/:id', (req, res) => {
    con.query(
        "DELETE FROM product",
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