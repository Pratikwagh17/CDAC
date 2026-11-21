const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ycpdb"
});

connection.connect((error) => {
    if (error) {
        console.log("Database connection failed:", error);
        return;
    }

    console.log("Database connection done");
});

module.exports = connection;