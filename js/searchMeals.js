import { createSidebar } from "./commonSidebar.js";

$("input").on("blur", function () {
  $("input").css({
    color: "white",
  });
});

$("#nameInput").on("input", function () {
  $(".loading-screen-search").removeClass("d-none");
  let mealName = $("#nameInput").val();
  searchMealsByName(mealName);
});

async function searchMealsByName(mealName) {
  $(".row-meals").html(`
      <div class="loading-screen-search bg-dark">
        <span class="loader"></span>
      </div>
    `);
  $(".loading-screen-search").removeClass("d-none");
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  let data = await res.json();
  $("body").css({
    overflow: "visible",
  });
  let meals = data.meals;
  if (meals) {
    $(".loading-screen-search").addClass("d-none");
    displaySearchedMeals(meals);
  } else {
    setTimeout(() => {
      $(".loading-screen-search").addClass("d-none");
      $(".row-meals").html(`
          <div class="bg-dark w-100 h-100 text-light text-center py-5">
            <p>No meals found for "${mealName}".</p>
          </div>
        `);
    }, 1000);
  }
}

function displaySearchedMeals(meals) {
  let cartona = ``;
  for (let i = 0; i < Math.min(20, meals.length); i++) {
    cartona += `
    <div class="col-md-3 g-4">
          <div class="card position-relative">
            <a href="mealDetails.html?id=${meals[i].idMeal}">
              <img src="${meals[i].strMealThumb}" class="w-100 rounded-2 meal-thumb" alt="${meals[i].strMeal}">
            </a>
            <div class="layer text-center">
              <h2>${meals[i].strMeal}</h2>
            </div>
          </div>
        </div>
        `;
    
  }
  $(".row-meals").html(cartona);
}
$(document).ready(function () {
  createSidebar();
});

$("#letterInput").on("input",function(){
  $(".loading-screen-search").removeClass("d-none");
  let mealLetter=$("#letterInput").val()
  if(mealLetter){
    searchMealsByLetter(mealLetter)
  }else{
    mealLetter="a"
    searchMealsByLetter(mealLetter)
  }


})
async function searchMealsByLetter(mealLetter){
  $(".row-meals").html(`
      <div class="loading-screen-search bg-dark">
        <span class="loader"></span>
      </div>
    `);
  $(".loading-screen-search").removeClass("d-none");
  let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealLetter}`)
  let data=await res.json()
  $("body").css({
    overflow: "visible",
  });
  let meals=data.meals  
  console.log(meals);
  
  if (meals) {
    $(".loading-screen-search").addClass("d-none");
    displaySearchedMeals(meals);
  } else {
    setTimeout(() => {
      $(".loading-screen-search").addClass("d-none");
      $(".row-meals").html(`
          <div class="bg-dark w-100 h-100 text-light text-center py-5">
            <p>No meals found for "${mealLetter}".</p>
          </div>
        `);
    }, 1000);
  }
}