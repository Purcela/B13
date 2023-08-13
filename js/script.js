
// -------------------------  burger box  ---------------------------------

$("#burger-menu").on("click", function(){
    $("#menu1").toggleClass("open-menu");
  })

// -------------------------  

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
  var src = $(this).attr('src');
  $('<div>').css({
      background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
      backgroundSize: 'contain',
      width:'100%', height:'100%',
      position:'fixed',
      zIndex:'10000',
      top:'0', left:'0',
      cursor: 'zoom-out'
  }).click(function(){
      $(this).remove();
  }).appendTo('body');
});

// -----------------------------  sort by ----------------------------

// Get the gallery container and all the gallery images
const galleryContainer = document.querySelector('.gallery-container');
const galleryImages = document.querySelectorAll('.product-box');

function myFunction() {
    var selectedCategory = document.getElementById("mySelect").value;

    // Loop through all gallery images
    galleryImages.forEach((img) => {
        if (selectedCategory === 'all' || img.getAttribute('value') === selectedCategory.toLowerCase()) {
            img.style.display = 'flex'; // Show the image if it matches the selected category or 'All'
        } else {
            img.style.display = 'none'; // Hide the image if it doesn't match the selected category
        }
    });

    document.getElementById("demo").innerHTML = "You selected: " + selectedCategory;
}

// ------------------------------- search ------------------------------
function searchByID() {
    var input, filter, gallery, productBoxes, idBoxes, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    gallery = document.querySelector('.gallery-container');
    productBoxes = gallery.querySelectorAll('.product-box');
    idBoxes = gallery.querySelectorAll('.id-box');

    for (i = 0; i < productBoxes.length; i++) {
        if (idBoxes[i].textContent.toUpperCase().indexOf(filter) > -1) {
            productBoxes[i].style.display = '';
        } else {
            productBoxes[i].style.display = 'none';
        }
    }
}


// ------------------------------ testing -------------------------------------

