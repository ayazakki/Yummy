import { createSidebar } from "./commonSidebar.js";
const url=window.location.href;
const urlObj=new URL(url)
const filteredArea=urlObj.searchParams.get('a')
console.log(filteredArea);
async function callApi(filteredArea) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filteredArea}`
  );
  let data = await res.json();
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  let area = data.meals;
  console.log(area);
  displayData(area);
}
$(document).ready(function () {
  createSidebar()
  callApi(filteredArea);
});

function displayData(area) {
  let cartona = ``;
  for (let i = 0; i < area.length; i++) {
    cartona += `
    <div class="col-md-3 g-4">
          <div class="card position-relative bg-black">
            <a href="mealDetails.html?id=${area[i].idMeal}">
              <img src="${area[i].strMealThumb}" class="w-100 rounded-2 meal-thumb" alt="${area[i].strMeal}">
            </a>
            <div class="layer flex-column text-center pt-3">
              <h3>${area[i].strMeal}</h3>
            </div>
          </div>
        </div>
        `;
    
  }

  $(".row").html(cartona);
}