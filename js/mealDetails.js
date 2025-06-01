import { createSidebar } from "./commonSidebar.js";

const url=window.location.href;
const urlObj=new URL(url)
const mealId=urlObj.searchParams.get('id')
console.log(mealId);

async function callMealOfId(mealId) {
  const res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
  const meal=await res.json()
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  const mealData=meal.meals
  console.log(mealData);
  displayMealDetails(mealData)
}
$(document).ready(function () {
  createSidebar()
  callMealOfId(mealId);
});
function displayMealDetails(mealData){
  const meal = mealData[0];
  let ingredientsList = ``;
  for (let i = 1; i <= 20; i++) {
    const measure = meal[`strMeasure${i}`];
    const ingredient = meal[`strIngredient${i}`];
    if((measure && ingredient) !== ""){
      ingredientsList += `<span class="badge badge-custom me-3 mb-3">${measure} ${ingredient}</span>`;
    }
  }
  let tagsList=``
  if(meal.strTags!==null){
    let tagArr=meal.strTags.split(",")
    for (let i = 0; i < tagArr.length; i++) {
      tagsList+=`
      <h3 class="badge badge-tag me-3">${tagArr[i]}</h3>
      `
    }
  }
  
  let cartona=`
  <div class="col-md-4">
          <div class="card m-auto w-75 card-details">
            <img src="${mealData[0].strMealThumb}" alt="${mealData[0].strMeal}">
          </div>
          <h1 class="fs-2 ps-5 pe-2 mt-4">${mealData[0].strMeal}</h1>
        </div>
        <div class="col-md-8 ps-5 pe-4 mt-4">
          <h2 class="fs-3">Instructions</h2>
          <p>${mealData[0].strInstructions}</p>
          <h2 class="fs-3">Area : ${mealData[0].strArea}</h2>
          <h2 class="fs-3">Category : ${mealData[0].strCategory}</h2>
          <h2 class="mb-3 fs-3">Recipes :</h2>
          ${ingredientsList}
          <h2 class="mb-3 pt-2 fs-3">Tags :</h2>
          ${tagsList}
          <div class="mt-3">
          <a class="btn btn-success me-2" href="${mealData[0].strSource}" target="_blank">Source</a>
          <a class="btn btn-danger" href="${mealData[0].strYoutube}" target="_blank">Youtube</a>
          </div>
        </div>
  `
  $(".row").html(cartona) 
}