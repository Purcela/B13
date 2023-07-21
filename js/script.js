$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })
$("#burger-menu1").on("click", function(){
  $("#menu1").toggleClass("open-menu");
})
$("#gallery-menu").on("click", function(){
  $("#menu2").toggleClass("open-menu");
})


function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}