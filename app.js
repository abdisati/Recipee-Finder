//get the elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

//add event listener
searchBtn.addEventListener("click", searchRecipe);

searchInput.addEventListener("keydown",(e)=>{
    if(e.key=="Enter") searchRecipe();
});

async function searchRecipe(){
    //get the search input
    const query=searchInput.trim();
    //check if it is empty
    if(!query){
        alert("Please enter a recipe name");
        return;
    }

    results.innerHTML ="Loading..";

    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

        const data= await response.json();

        displayRecipes(data.meals);
    } catch (error){
        results.innerHTML="Something went wrong";
        console.error(error);
    }
}

function displayRecipes(meals){
    results.innerHTML = "";

    if(!meals){
        results.innerHTML = "No recipes found";
        return;
    }

    meals.forEach( meal =>{
        const card=document.createElement("div");
        card.classList.add("card"); //add class name
        //add the cards inner elements
        card.innerHTML = `
        <img src="${meal.strMealThumb}"/>
        <h3> ${meal.strMeal}</h3>
        <p> ${meal.strCategory} . ${meal.strArea}</p>
        `;

        card.addEventListener("click",()=>{
            alert(meal.strInstructions);
        });

        results.appendChild(card);
    }

    );
}