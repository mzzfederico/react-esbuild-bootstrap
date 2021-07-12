const path = require("path");
const fs = require("fs");
const express = require('express');
const app = express();
const port = 3000;

app.use(
    express.static(
        path.resolve(__dirname, '..', "static")
    )
);

app.use(
    "/dist",
    express.static(
        path.resolve(__dirname, '..', "..", "client", "dist")
    )
);

app.get('*', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', "static", "index.html"), "utf8", function (err, data) {
        res.send(`${data}`);
    });
});

app.listen(port, () => console.log("listening on " + port));