const express = require('express');
// const { create } = require('express-handlebars');
const { create } = require("express-handlebars");


const app = express();

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// middleware
app.use(express.static(__dirname + "/public"))
app.use('/', require('./routes/home'))
app.use('/auth', require('./routes/auth'))


app.listen(5000, () => console.log('Server On'))