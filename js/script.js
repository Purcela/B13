
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

// Get the source image to be edited
let image = document.getElementById('sourceImage');

// Get the canvas for the edited image
let canvas = document.getElementById('canvas');

// Get the 2D context of the image
let context = canvas.getContext('2d');

// Get all the sliders of the image
let brightnessSlider = document.getElementById("brightnessSlider");
let contrastSlider = document.getElementById("contrastSlider");
let grayscaleSlider = document.getElementById("grayscaleSlider");
let hueRotateSlider = document.getElementById("hueRotateSlider");
let saturateSlider = document.getElementById("saturationSlider");
let sepiaSlider = document.getElementById("sepiaSlider");

function uploadImage(event) {

	// Set the source of the image from the uploaded file
	image.src = URL.createObjectURL(event.target.files[0]);

	image.onload = function () {
		// Set the canvas the same width and height of the image
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.crossOrigin = "anonymous";
		applyFilter();
	};

	// Show the image editor controls and hide the help text
	document.querySelector('.help-text').style.display = "none";
	document.querySelector('.image-save').style.display = "block";
	document.querySelector('.image-controls').style.display = "block";
	document.querySelector('.none').style.display = "none";
};

// This function is used to update the image
// along with all the filter values
function applyFilter() {

	// Create a string that will contain all the filters
	// to be used for the image
	let filterString =
		"brightness(" + brightnessSlider.value + "%" +
		") contrast(" + contrastSlider.value + "%" +
		") grayscale(" + grayscaleSlider.value + "%" +
		") saturate(" + saturateSlider.value + "%" +
		")";

	// Apply the filter to the image
	context.filter = filterString;

	// Draw the edited image to canvas
	context.drawImage(image, 0, 0);
}

// A series of functions that handle the preset filters
// Each of these will first reset the image
// and then apply a certain parameter before
// redrawing the image
function brightenFilter() {
	resetImage();
	brightnessSlider.value = 130;
	contrastSlider.value = 120;
	saturateSlider.value = 120;
	applyFilter();
}

function bwFilter() {
	resetImage();
	grayscaleSlider.value = 100;
	brightnessSlider.value = 120;
	contrastSlider.value = 120;
	applyFilter();
}

function funkyFilter() {
	resetImage();

	// Set a random hue rotation everytime
	hueRotateSlider.value =
		Math.floor(Math.random() * 360) + 1;
	contrastSlider.value = 120;
	applyFilter();
}

function vintageFilter() {
	resetImage();
	brightnessSlider.value = 120;
	saturateSlider.value = 120;
	sepiaSlider.value = 150;
	applyFilter();
}

// Reset all the slider values to there default values
function resetImage() {
	brightnessSlider.value = 100;
	contrastSlider.value = 100;
	grayscaleSlider.value = 0;
	hueRotateSlider.value = 0;
	saturateSlider.value = 100;
	sepiaSlider.value = 0;
	applyFilter();
}

function saveImage() {
	// Select the temporary element we have created for
	// helping to save the image
	let linkElement = document.getElementById('link');
	linkElement.setAttribute(
	'download', 'edited_image.png'
	);

	// Convert the canvas data to a image data URL
	let canvasData = canvas.toDataURL("image/png")

	// Replace it with a stream so that
	// it starts downloading
	canvasData.replace(
	"image/png", "image/octet-stream"
	)

	// Set the location href to the canvas data
	linkElement.setAttribute('href', canvasData);

	// Click on the link to start the download
	linkElement.click();
}
