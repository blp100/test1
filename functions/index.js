const functions = require("firebase-functions");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(express.static("public"));

app.get("/", (req, res)=>{
    let today = new Date();
    let currentDay = today.getDay();
    let day = (currentDay == 6 || currentDay == 0)? "假日，趕快出來玩！": "平日，好好當社畜。";

    res.render("index",{kindOfDay: day});
})


const dogsList = ["Labrador", "Beagle", "Shiba Inu"];

app.get("/dogs", (req, res)=>{
    res.send(dogsList);
})

// just use in localhost
// const port = process.env.port || 3000;
// app.listen(port, function() {
//     console.log("Server started on port " + port);
// });

//don't listen the port, if you want to use firebase
exports.app = functions.https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
