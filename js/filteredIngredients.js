import { createSidebar } from "./commonSidebar.js";
const url=window.location.href;
const urlObj=new URL(url)
const filteredIngredients=urlObj.searchParams.get('i')
console.log(filteredIngredients);
async function callApi(filteredIngredients) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filteredIngredients}`
  );
  let data = await res.json();
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  let ingredients = data.meals;
  console.log(ingredients);
  displayData(ingredients);
}
$(document).ready(function () {
  createSidebar()
  callApi(filteredIngredients);
});

function displayData(ingredients) {
  let cartona = ``;
  for (let i = 0; i < Math.min(20, ingredients.length); i++) {
    cartona += `
    <div class="col-md-3 g-4">
          <div class="card m-auto position-relative bg-black">
            <a href="mealDetails.html?id=${ingredients[i].idMeal}">
              <img src="${ingredients[i].strMealThumb}" class="w-100 rounded-2 meal-thumb" alt="${ingredients[i].strMeal}">
            </a>
            <div class="layer flex-column text-center pt-3">
              <h3>${ingredients[i].strMeal}</h3>
            </div>
          </div>
        </div>
        `;
    
  }

  $(".row").html(cartona);
}