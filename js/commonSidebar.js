export function createSidebar(){
  $(document).ready(function () {
  $("#toggleIcon").on("click", function () {
    if ($(this).hasClass("fa-bars")) {
      $(this).removeClass("fa-bars").addClass("fa-x");
      $(".left-section").removeClass("hidden");
      $(".right-side").removeClass("shifted");
    } else {
      $(this).removeClass("fa-x").addClass("fa-bars");
      $(".left-section").addClass("hidden");
      $(".right-side").addClass("shifted");
    }
  });
});
}