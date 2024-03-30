import {research_data} from "./js/research";

var last_image_path = "";
var last_pdf_path = "";

var loadImage = function(event) {
    var image = document.getElementById('output');
    last_image_path = event.target.files[0];
    image.src = URL.createObjectURL(last_image_path);
    console.log(last_image_path)
};

let imageInput = document.getElementById("file_image")
console.log(imageInput)
imageInput.addEventListener("input", (e)=>{
    loadImage(e)
    console.log("form event listener:", e)
})

var loadPDF = function (event)
{
    last_pdf_path = event.target.files[0];
}

document.getElementById("file_pdf").addEventListener("change", (e)=>{
    loadPDF(e)})
function publish_research()
{
    let data = getPublishData();
    if (data === 1)
    {
        console.log("insert title please");
    }
    else if (data === 2)
    {
        console.log("insert author please");
    }
    else if (data === 3)
    {
        console.log("insert thumbnail please");
    }
    else if (data === 4)
    {
        console.log("insert research paper please");
    }
    else
    {
        console.log(data)
    }
}

document.getElementById("publish-button").addEventListener("change", (e)=>{
    publish_research()
})

function getPublishData() {

    // Get references to the form elements
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const categorySelect = document.getElementById("category");
    const thumbnailInput = document.getElementById("thumbnail");
    const pdf = document.getElementById("pdf");

    // Extract values from the form elements
    let title = titleInput.value;
    let author = authorInput.value;
    let category = categorySelect.value;
    let date = new Date();
    let thumbnail = last_image_path;
    let content = last_pdf_path;

    if (title.trim().length === 0)
        return 1;
    if (author.trim().length === 0)
        return 2;

    if (thumbnail === null)
        return 3;
    if (thumbnail === "")
        return 3;

    if (content === null)
        return 4;
    if (content === "")
        return 4;

    // Create an object to store the data
    return new research_data(title, author, category, content, date, thumbnail);
}