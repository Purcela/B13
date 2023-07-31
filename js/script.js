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




//-------------------------- TEST -------------------------------------

const galleryImages = document.querySelectorAll('.gallery-img');
const fullImgContainer = document.querySelector('.full-img');

// Add click event listeners to each thumbnail image
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    // Create a new image element for the full-size image
    const fullImg = document.createElement('img');
    fullImg.src = img.src; // Set the source of the full-size image to the clicked thumbnail image
    fullImg.alt = img.alt; // Set the alt text of the full-size image to the alt text of the thumbnail image

    // Clear any previous content in the full-img container
    fullImgContainer.innerHTML = '';

    // Append the full-size image to the full-img container
    fullImgContainer.appendChild(fullImg);
  });
});

//----------------------------------------------------------------------