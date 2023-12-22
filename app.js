const express = require("express");

const app = express();

app.use(express.json());

const router = require("./routes/api");
app.use(router);

app.listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
});