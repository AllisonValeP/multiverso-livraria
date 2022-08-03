const env = require('dotenv').config();
//Configuraçoes da Session app.js
const session = {
    secret: env.parsed.SESSION_SECRET,
    reseve: env.parsed.SESSION_RESAVE,
    saveUninitialized: env.parsed.SESSION_SAVEUNINITIALIZED,
}

module.exports = session