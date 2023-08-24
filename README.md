# PDF Generation

In Kontent.ai, we are able to provide structure to our content. PDF is popular among the content industry for sharing and printing documents. There are two ways to work with pdf.

- Generate transactional PDF using PDF Generator API: Super easy. This is the best tool if you want to work with PDF documents while setting up the templates and generating PDF instantly. It helps us to generate PDFs from JSON
- Programmatic way: Using Node.js, generate HTML and download the PDF using [Puppeteer](https://pptr.dev/).

## Prerequisite
Kontent.ai Project ID and item_codename 

## Install

```
> git clone https://github.com/pritisolanki/kontent-pdf-sample.git
> cd kontent-pdf-sample
> npm install
> npm run dev
```
The app will start serving at http://localhost:3000

## Set up .env file
project_id=<PROJECT_ID>
<br/>
item_codename=<ITEM_Codename>

## Getting Started with Code 
This demo code is set up to showcase how we can generate HTML dynamically from item_codename and then download the page as a pdf.

### How to generate HTML from item_codename
To generate an article from item_codename: go to  [article page](http://localhost:3000/article). It will load the HTML page. To change the format of the template please change the pug template and style.css
### How to generate pdf
To generate a pdf, go to [Generate PDF](http://localhost:3000/generate-url?url=http://localhost:3000/article) link. It will download the pdf in your download folders.
