const express = require('express');
const app = express();
const vidRoutes = require('./routes/videos');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


app.use((req, res, next) => {

    if ((req.method === 'GET') && ((req.query.api_key === '') || (Object.keys(req.query).length === 0))){
        res.status(404).json({
            message: "requires authentication"

          })
    } else {
        
        next();
    }
})

app.use('/videos', vidRoutes);
app.listen(8080, () => console.log('Server running port 8080'));