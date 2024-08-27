const galleryItem = document.getElementsByClassName(".gallery-item");
// create element for beautifulBox
const beautifulBoxContainer = document.createElement("div");
// for basic area
const beautifulBoxContent = document.createElement("div");
// for images
const beautifulBoxImg = document.createElement("img");
// for prev button to change images 
const beautifulBoxPrev = document.createElement("div");
// for next button
const beautifulBoxNext = document.createElement("div");

beautifulBoxContainer.classList.add('beautifulbox');
beautifulBoxContent.classList.add('beautifulbox-content');
beautifulBoxPrev.classList.add("fa","fa-angle-left","beautifulbox-Prev");
beautifulBoxNext.classList.add("fa","fa-angle-right","beautifulbox-Next");

beautifulBoxContainer.appendChild(beautifulBoxContent);
beautifulBoxContent.appendChild (beautifulBoxImg);
beautifulBoxContent.appendChild(beautifulBoxPrev);
beautifulBoxContent.appendChild(beautifulBoxNext);
document.body.appendChild(beautifulBoxContainer);

let index = 1;

function showBeautifulBox(n)
 {
   if(n > galleryItem.length) 
      {
        index = 1; 
      }
   else if(n < 1)
     {
       index = galleryItem.length; 
     }

  let imageLocation = galleryItem[index-1].Children[0].getAttribute("src");
  beautifulBoxImg.setAttribute("src",imageLocation);
}

function currentImage() {
    beautifulBoxContainer.style.display ="block";
    
let imageIndex = parseInt(this.getAttribute("data-index"));
showBeautifulBox(index = imageIndex);
}

for(let i = 0; i < galleryItem.length ; i++)
  {
  galleryItem[i].addEventListener("click",currentImage);
}
function sliderImage(n)
 {
    showBeautifulBox(index += n);
}
function prevImage() {
    sliderImage(-1);
}
function nextImage() {
    sliderImage(1);
}

beautifulBoxPrev.addEventListener("click",prevImage);
beautifulBoxNext.addEventListener("click",nextImage);

function closeBeautifulBox(){
    if(this === event.target){
        beautifulBoxContainer.style.display = "none";
    }
}
beautifulBoxContainer.addEventListener("click",closeBeautifulBox);