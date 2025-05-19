import { createSidebar } from "./commonSidebar.js";
const url=window.location.href;
const urlObj=new URL(url)
const filteredCategory=urlObj.searchParams.get('c')
console.log(filteredCategory);
async function callApi(filteredCategory) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filteredCategory}`
  );
  let data = await res.json();
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  let category = data.meals;
  console.log(category);
  displayData(category);
}
$(document).ready(function () {
  createSidebar()
  callApi(filteredCategory);
});

function displayData(category) {
  let cartona = ``;
  for (let i = 0; i < category.length; i++) {
    cartona += `
    <div class="col-md-3 g-4">
          <div class="card position-relative bg-black">
            <a href="mealDetails.html?id=${category[i].idMeal}">
              <img src="${category[i].strMealThumb}" class="w-100 rounded-2 meal-thumb" alt="${category[i].strMeal}">
            </a>
            <div class="layer flex-column text-center pt-3">
              <h3>${category[i].strMeal}</h3>
            </div>
          </div>
        </div>
        `;
    
  }

  $(".row").html(cartona);
}