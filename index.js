const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
    res.render("index", { 
            title: "Home",
            maintitle:"Storms relentless as California drenching goes on", 
            summary:"Multi-million dollar beach homes battered by winds, cars swallowed up by sinkholes, and over a dozen people killed - after weeks of extreme storms, many Californians are wondering when it will end.",
            description: "Multi-million dollar beach homes battered by winds, cars swallowed up by sinkholes, and over a dozen people killed - after weeks of extreme storms, many Californians are wondering when it will end.The state\'s famously sunny southern coast has been hit by storm after storm since the December holidays, eroding roads, felling trees and causing landslides.",
            author: "Matt McGrath",
            heroimage: "https://assets-us-01.kc-usercontent.com:443/de5ae299-9a31-0088-0530-600cb3679f83/a456a335-795e-4ae3-9abf-b58038b87bfb/death-valley.jpg?w=700&h=700&fit=clip"
        });
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});