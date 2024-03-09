const express = require('express');

const app = express();

//APIS
app.get("/", (req, res) => {
    res.status(200).send("Hello");
})

const PORT = process.env.PORT || 30001;
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})