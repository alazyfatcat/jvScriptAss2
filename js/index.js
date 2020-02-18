//step 1 initialize and declare variable 
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


//step 2: loop 5 times to create the <img> elements 
for (var i = 1; i< 6; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src','images/pic'+ i + '.jpg');
    thumbBar.appendChild(newImage);
    //step 3 build event handler for each <img> 
    // newImage.onclick = function (event) {
    //     var imgSrc = event.target.getAttribute('src');
    // displayImage(imgSrc);  
    // }
}

//step 4: function to change the src of the main <img> 
function displayImage(value) {
    displayedImage.setAttribute('src',value);
}

/*step 5: event delegation. Instead of adding event for each image, how about event delegation? build a click handler on the parent element, and capture each target 
(and its attribute)  from the event object */
    thumbBar.onclick = function (event) {
        //event.target is the element that was clicked
        if(event.target && event.target.name === 'IMG') {
        var imgSrc = event.target.getAttribute('src');
        displayImage(imgSrc);  
        }
    }


