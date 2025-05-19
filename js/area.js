import { createSidebar } from "./commonSidebar.js";
async function callApi() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let data = await res.json();
  $(".loading-screen").toggleClass("d-none")
  $("body").css({
    "overflow":"visible"
  })
  let listArea = data.meals;
  displayData(listArea);
}
$(document).ready(function () {
  createSidebar()
  callApi();
});

function displayData(listArea) {
  let cartona = ``;
  for (let i = 0; i < Math.min(20, listArea.length); i++) {
    cartona += `
    <div class="col-md-3 g-4">
          <div class="card position-relative bg-black">
            <a href="filteredArea.html?a=${listArea[i].strArea}" class=" text-decoration-none text-white text-center">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${listArea[i].strArea}</h3>
            </a>
          </div>
        </div>
        `;
    
  }

  $(".row").html(cartona);
}