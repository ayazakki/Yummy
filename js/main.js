import { createSidebar } from "./commonSidebar.js";
async function callApi() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let data = await res.json();
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  let meals = data.meals;
  console.log(data);
  displayData(meals);
}
$(document).ready(function () {
  createSidebar()
  callApi();
});

function displayData(meals) {
  let cartona = ``;
  for (let i = 0; i < meals.length; i++) {
    cartona += `
    <div class="col-md-3 g-4">
          <div class="card m-auto text-center position-relative">
            <a href="mealDetails.html?id=${meals[i].idMeal}">
              <img src="${meals[i].strMealThumb}" class="w-100 rounded-2 meal-thumb" alt="${meals[i].strMeal}">
            </a>
            <div class="layer">
              <h2>${meals[i].strMeal}</h2>
            </div>
          </div>
        </div>
        `;
    
  }

  $(".row").html(cartona);
}
