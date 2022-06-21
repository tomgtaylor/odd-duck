"use strict"

let imageEls = document.querySelectorAll('img');  // "Treat this exastly like an array here" -> return an array of multiple elements. 
                                                // querySelectorAll is built to return an array and/or NodeList...

//-------------------------------------------------------
//array of file images in assets folder
const fileNames = [     
    "bag.jpg", 
    "banana.jpg", 
    "bathroom.jpg", 
    "boots.jpg", 
    "breakfast.jpg", 
    "bubblegum.jpg", 
    "chair.jpg", 
    "cthulhu.jpg", 
    "dog-duck.jpg", 
    "dragon.jpg", 
    "pen.jpg", 
    "pet-sweep.jpg", 
    "scissors.jpg", 
    "shark.jpg", 
    "sweep.png", 
    "tauntaun.jpg", 
    "unicorn.jpg", 
    "water-can.jpg", 
    "wine-glass.jpg"];
//-------------------------------------------------------
const imgName = [
    "bag", 
    "banana", 
    "bathroom", 
    "boots", 
    "breakfast", 
    "bubblegum", 
    "chair", 
    "cthulhu", 
    "dog-duck", 
    "dragon", 
    "pen", 
    "pet-sweep", 
    "scissors", 
    "shark", 
    "sweep.png", 
    "tauntaun", 
    "unicorn", 
    "water-can", 
    "wine-glass"];
//-------------------------------------------------------

const images = [];

//-------------------------------------------------------
    //below is a constructor function for images
    //we're going to use this constructor function to create what we're calling an image. It just takes a fileName.
function Images(fileName) {
    this.clicks = 0;
    this.views = 0;
    this.id = fileName;
    this.src = 'assets/${fileName}';
};
//-------------------------------------------------------

for (let i = 0; i < fileNames.length; i++) {
    images.push(new Image(fileNames[i]));
}

//-------------------------------------------------------
    //rendering image data in images onto the imageEls 
         
imageEls[0].id = images[0].id;  //this first element. image id to property id 
imageEls[0].src = images[0].src;
imageEls[1].id = images[1].id;
imageEls[1].src = images[1].src;
imageEls[2].id = images[2].id;
imageEls[2].src = images[2].src;

images[0].views++;
images[1].views++;
images[2].views++;
//-------------------------------------------------------

function handleClick(event) {
    for (let i = 0; i < images.length; i++) {       // <-- an array search
        if (event.target.id === images[i].id) {     //[i] represents the index position inside the for loop.
            images[i].clicks++;                     // if we find an image whose id matches element's id, we're going to increment clicks
        }
    }

    renderImages();
    console.log(images);
        // let newImage1 = generateRandomImage();
        // let newImage2 = generateRandomImage();
        // let newImage3 = generateRandomImage();
}

//-------------------------------------------------------

imageEls.forEach(function(img) {                    // assignes an eventListener to their click event.
    img.addEventListener('click', handleClick);     //running line of code twice. For each first and second image, add event listener.
});

//-------------------------------------------------------
    // generate 3 new images. if they are different, render them.
function renderImages() {
    let image1 = generateRandomImage();
    let image2 = generateRandomImage();
    let image3 = generateRandomImage();

    while (image1.id === image2.id || image2.id === image3.id || image1.id === image3.id){
        image1 = generateRandomImage();
    }

        //render to our imageEls

        imageEls[0].id = images1.id;        
        imageEls[0].src = images1.src;

        imageEls[1].id = images2.id;
        imageEls[1].src = images2.src;
        
        imageEls[2].id = images3.id;
        imageEls[2].src = images3.src;

        image1.views++;
        image2.views++;
        image3.views++;

};

//-------------------------------------------------------
    //generate a random image from images array.
function generateRandomImage() {
    let index = Math.floor(Math.random() * images.length);
    return images[index];
}
//-------------------------------------------------------
console.log(generateRandomImage());