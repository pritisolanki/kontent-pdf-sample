const express = require("express");
const path = require("path");
const axios = require('axios');
require('dotenv').config()
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || "3000";

app.get("/article", (req, res) => {
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
    });
    /**poppulate all the variable from above api call */
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static("public"));

app.get('/generate-pdf',async(req,res)=>{
    const url = req.query.url;
    console.log(url)
    if(!url){
        return res.status(400).send("Missing URL parameter");
    }
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url, { waitUntil: 'networkidle0'});
        const pdfBuffer = await page.pdf({
            format : 'A4',
            printBackground: true
        });

        await browser.close();
        res.set('Content-Type', 'aaplication/pdf');
        res.send(pdfBuffer)
    }catch(error){
        console.log(error);
        res.render("errorpage", { 
            title: "Home",
            errormessage:"Oops ! Something went wrong", 
        });
    }
})


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});