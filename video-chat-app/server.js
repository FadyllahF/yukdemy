const express = require("express");
const app = express();
const server = require("http").Server(app);
const roomId = 1

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('room' , {roomId})
});

server.listen(3030);