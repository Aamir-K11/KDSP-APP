const express = require("express");
const SignUpRoute = require("./routes/signup");
const WaitlistRoute = require("./routes/waitlist");
const RepresentativeRoute  = require("./routes/representative");
const app = express();
const db = require("./mongodb");



PORT = process.env.PORT || 3000;

app.use("/signup",SignUpRoute);
app.use("/waitlist",WaitlistRoute);
app.use("/approve",RepresentativeRoute);


db.connect(() => {
    app.listen(PORT, function (){
        console.log(`Listening on PORT#${PORT}`);
    });
});
