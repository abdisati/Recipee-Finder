//get the elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

//add event listener
searchBtn.addEventListener("click", searchRecipe);

searchInput.addEventListener("keydown",(e)=>{
    if(e.key=="Enter") searchRecipe();
});

