import { createSidebar } from "./commonSidebar.js";
async function callApi() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let data = await res.json();
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  let categories = data.categories;
  displayData(categories);
}
$(document).ready(function () {
  createSidebar()
  callApi();
});

function displayData(categories) {
  let cartona = ``;
  for (let i = 0; i < Math.min(20, categories.length); i++) {
    cartona += `
    <div class="col-md-3 g-4">
          <div class="card position-relative bg-black">
            <a href="filterCategories.html?c=${categories[i].strCategory}">
              <img src="${categories[i].strCategoryThumb}" class="w-100 rounded-2 meal-thumb" alt="${categories[i].strCategory}">
            </a>
            <div class="layer flex-column text-center pt-3">
              <h3>${categories[i].strCategory}</h3>
              <p>${categories[i].strCategoryDescription.split(" ",6).join(" ")}</p>
            </div>
          </div>
        </div>
        `;
    
  }

  $(".row").html(cartona);
}