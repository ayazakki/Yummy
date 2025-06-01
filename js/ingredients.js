import { createSidebar } from "./commonSidebar.js";
async function callApi() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let data = await res.json();
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  let ingredients = data.meals;
  displayData(ingredients);
}
$(document).ready(function () {
  createSidebar()
  callApi();
});

function displayData(ingredients) {
  let cartona = ``;
  for (let i = 0; i < Math.min(20, ingredients.length); i++) {
    if(ingredients[i].strDescription !==null){
        cartona += `
    <div class="col-md-3 g-4">
          <div class="card m-auto position-relative bg-black">
            <a href="filteredIngredients.html?i=${ingredients[i].strIngredient}" class=" text-decoration-none text-white text-center">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${ingredients[i].strIngredient}</h3>
              <p>${ingredients[i].strDescription.split(" ",20).join(" ")}</p>
            </a>
          </div>
        </div>
        `;
    }
  
    
  }

  $(".row").html(cartona);
}