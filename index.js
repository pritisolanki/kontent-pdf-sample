const express = require("express");
const path = require("path");
const axios = require('axios');
require('dotenv').config()

const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
    const api_url = `https://deliver.kontent.ai/${process.env.project_id}/items/${process.env.item_codename}`;
    /* call kontent.ai url */
    axios.get(api_url)
    .then(function (response) {
        // handle success
       // console.log(response.data.modular_content);
        const authoritem = response.data.item.elements.author.value[0];
        res.render("index", { 
            title: "Home",
            maintitle:response.data.item.elements.title.value, 
            summary:response.data.item.elements.summary.value,
            description: response.data.item.elements.description.value,
            author: `${response.data.modular_content[authoritem].elements.first_name.value} ${response.data.modular_content[authoritem].elements.second_name.value}`,
            heroimage: response.data.item.elements.hero_image.value[0].url
     });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
    /**poppulate all the variable from above api call */
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});