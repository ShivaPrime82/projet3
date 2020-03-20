const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.use(express.static("./public"));

app.get('/api/user', (req, res) => {
    res.send({
        "name": Jérémy,
        "verified": true,
        "birthdate": 04/11/1992,
        "friends": ({
            "1": Moi,
            "2": MoiEncore,
            "3": EncoreMoi
        }),    
    });
});
