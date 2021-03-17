
var motherObj = {
    allFavourites: []
};

function Favourites(url, title, comment, tag){
    this.url = url,
    this.title = title,
    this.comment =comment,
    this.tag = tag,

    this.info = ()=>`<li> <a href=${this.url}> ${this.title} </a><br> ${this.comment}<br>Tags : ${this.tag}</li>`
}
 // your code here

 // set up button click handler
let submitButton = document.getElementById("functButton");
 submitButton.addEventListener("click", addFavorite);

 function addFavorite() {
 let url = document.getElementById("url").value;
 // url is the only required field
 if (!url) {
 alert("Please enter a URL for your favorite");
 return;
 } else {
 let title = document.getElementById("title").value;
 let comment = document.getElementById("comment").value;
 let tags = document.getElementById("tags").value;

 // Create a new favorite object
 // your code here
    const favouriteObj = motherObj.allFavourites;
    favouriteObj[favouriteObj.length] = new Favourites(url, title, comment, tags);

 // Add favorite to all favorites
 // your code here

 // Display favorites
 // your code here
 displaySetting();
 }
 // reset the form
 let form = document.querySelector("form");
 form.reset();
 }

 function displaySetting(){
     let getCont = ""; 
    let collection = motherObj.allFavourites;
    for(let i= 0; i < collection.length; i++){
        getCont += collection[i].info();
    }
    const printThis = document.getElementById('favorites');
    printThis.innerHTML = getCont;
 }
 