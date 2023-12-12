var imgNumber = 0;
var path = ["001.jpeg",
  "002.jpeg",
  "003.jpeg",
  "004.jpeg",
  "005.jpeg",
  "006.jpeg",
  // "007.jpg",
  // "008.jpg",
  // "009.jpg",
  // "010.jpg",
  // "011.jpg",
  // "012.jpg",
  // "013.jpg",
  // "014.jpg",
  // "015.jpg",
  // "016.jpg",
  // "017.jpg",
  // "018.jpg",
  // "019.jpg",
  // "020.jpg",
  // "021.jpg",
  // "022.jpg",
  // "023.jpg",
  // "024.jpg",
  // "025.jpg",
  // "026.jpg",
  // "027.jpg",
  // "028.jpg",
  // "029.jpg",
  // "030.jpg",
  // "031.jpg",
  // "032.jpg",
  // "033.jpg",
  // "034.jpg",
  // "035.jpg",
  // "036.jpg",
  // "037.jpg",
  // "038.jpg",
  // "039.jpg",
  // "040.jpg",
  // "041.jpg",
  // "042.jpg",
  // "043.jpg",
  // "044.jpg",
  // "045.jpg",
  // "046.jpg",
  // "047.jpg",
  // "048.jpg",
  // "049.jpg",
  // "050.jpg",
  // "051.jpg",
  // "052.jpeg",
  // "053.jpg",
  // "054.jpg",
  // "055.jpg",
  // "056.jpg",
  // "057.jpg",
  // "058.jpg",
  // "059.jpg",
  // "060.jpg",
  // "061.jpg",
  // "062.jpg",
  // "063.jpg",
  // "064.jpg",
  // "065.jpg",
  // "066.jpg",
  // "067.jpg",
  // "068.jpg",
  // "069.jpg",
  // "070.jpg",
  // "071.jpg",
  // "072.jpg",
  // "073.jpg",
  // "074.jpg",
  // "075.jpg",
  // "076.jpg",
  // "077.jpg",
  // "078.jpg",
  // "079.jpg",
  // "080.jpg",
  // "081.jpg",
  // "082.jpg",
  // "083.jpg",
  // "084.jpg",
  // "085.jpg",
  // "086.jpg",
  // "087.jpg",
  // "088.jpg",
  // "090.jpg",
  // "091.jpg",
  // "092.jpg",
  // "093.jpg",
  // "094.jpg",
  // "095.jpg",
  // "096.jpg",
  // "097.jpg",
  // "098.jpg",
  // "099.jpg",
  // "100.jpg",
  // "101.jpg",
  // "102.jpg",
  // "103.jpg",
  // "104.jpg",
  // "105.jpg",
  // "106.JPG",
  // "107.jpg",
  // "IMG_4295.png",
  // "109.jpg",
];
var numberOfImg = path.length;
var timer = null;
const container = document.querySelector('#slideshow');



/* function swapImage() {
    const newSlide = document.createElement('div');
    //newSlide.src = path[imgNumber];
    newSlide.innerHTML = `<img src="${path[imgNumber]}">`;
    newSlide.className = "fadeinimg";
    container.appendChild(newSlide);
    if (container.children.length > 2) {
        container.removeChild(container.children[0]);
    }
} */

function swapImage() {
  const theImage = new Image();
  theImage.scr = path[imgNumber];
  const imgWidth = theImage.width;
  const imgHeight = theImage.height;
  const orientation = imgWidth > imgHeight ? "wide" : "tall";
  const newSlide = document.createElement('div');
  newSlide.src = path[imgNumber];
  newSlide.innerHTML = `<img src="${path[imgNumber]}" class="${orientation}">`;
  newSlide.className = "fadeinimg";
  container.appendChild(newSlide);
  if (container.children.length > 2) {
      container.removeChild(container.children[0]);
  }
}

function incrementNumber(){
  if(imgNumber == path.length) {
      imgNumber = 0;
    }
    else {
      imgNumber++;
    }
}

function runSlideshow(){
  incrementNumber();
  swapImage();
}

/* function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  console.log(imgNumber);
  document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
} */

function setTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(runSlideshow, 7000);
  }
  return false;
}

function previousImage() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    imgNumber--;
  }
  imgNumber--;
  if (imgNumber < 0) {
    imgNumber = numberOfImg - 1;
  }
  console.log(`prev function ${imgNumber}`);
  swapImage();
  /* document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg); */
  return false;
}

function nextImage() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  ++imgNumber;
  if (imgNumber > (numberOfImg - 1)) {
    imgNumber = 0;
  }
  swapImage();
  /* document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg); */
  return false;
}

/* function changeCounter(cur, total) {
  document.getElementById("counter").innerHTML = cur + "/" + total;
}
document.getElementById("counter").innerHTML = 1 + "/" + path.length; */



// Disappearing Cursor

(function() {
    var mouseTimer = null, cursorVisible = true;

    function disappearCursor() {
        mouseTimer = null;
        document.body.style.cursor = "none";
        cursorVisible = false;
    }

    document.onmousemove = function() {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            document.body.style.cursor = "default";
            cursorVisible = true;
        }
        mouseTimer = window.setTimeout(disappearCursor, 1000);
    };
})();

// Disappearing Buttons

var timedelay = 1;
function delayCheck()
{
if(timedelay == 1)
{
$('#button').fadeOut();
timedelay = 1;
}
timedelay = timedelay+1;
}
$(document).mousemove(function() {
$('#button').fadeIn();
timedelay = 1;
clearInterval(_delay);
_delay = setInterval(delayCheck, 1000);
});
// page loads starts delay timer
_delay = setInterval(delayCheck, 1000);
