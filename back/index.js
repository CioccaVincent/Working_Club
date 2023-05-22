const db = require('./database/db');

db.dbinfo
    .authenticate()
    .then(() => {
        console.log("Conection has been established successfuly.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

// Conection de la BDD avec PHPMyAdmin