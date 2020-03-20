const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.use(express.static("./public"));

app.get('/api/user', (req, res) => {
    res.send({
        name: "Jérémy",
        verified: "true",
        birthdate: "04/11/1992",
        friends: ([ "Moi", " MoiEncore", " EncoreMoi" ]
            ),    
    });
});

// const profile = document.getElementById('main-content');

// const response = fetch ('/api/user'); //await fetch ('/api/user');

// const json = response.json(); //await response.json();

// const name = profile.getElementsByClassName('name')[0];
// const verified = profile.getElementsByClassName('boolean')[0];
// const birthdate = profile.getElementsByClassName('birthday')[0];
// const friends = profile.getElementsByClassName('array')[0];

// name.innerHTML = json.name;
// verified.innerHTML = json.verified;
// birthdate.innerHTML = json.birthdate;
// friends.innerHTML = json.friends;