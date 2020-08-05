const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/build/'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`);
});