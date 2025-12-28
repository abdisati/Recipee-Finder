const instructions=localStorage.getItem("instructions");
const mealName = localStorage.getItem("mealName");

document.getElementById("mealName").textContent=mealName;
document.getElementById("instructions").textContent=instructions;