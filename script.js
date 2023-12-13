var imgNumber = 0;
var path = ["001.jpeg",
  "002.jpeg",
  "003.jpeg",
  "004.jpeg",
  "005.jpeg",
  "006.jpeg",
  "007.jpeg",
  "008.jpeg",
  "009.jpeg",
  "010.jpeg",
  "011.jpeg",
  "012.jpeg",
  "013.jpeg",
  "014.jpeg",
  "015.jpeg",
  "016.jpeg",
  "017.jpeg",
  "018.jpeg",
  "019.jpeg",
  // "020.jpeg",
  // "021.jpeg",
  // "022.jpeg",
  // "023.jpeg",
  // "024.jpeg",
  // "025.jpeg",
  // "026.jpeg",
  // "027.jpeg",
  // "028.jpeg",
  // "029.jpeg",
  // "030.jpeg",
  // "031.jpeg",
  // "032.jpeg",
  // "033.jpeg",
  // "034.jpeg",
  // "035.jpeg",
  // "036.jpeg",
  // "037.jpeg",
  // "038.jpeg",
  // "039.jpeg",
  // "040.jpeg",
  // "041.jpeg",
  // "042.jpeg",
  // "043.jpeg",
  // "044.jpeg",
  // "045.jpeg",
  // "046.jpeg",
  // "047.jpeg",
  // "048.jpeg",
  // "049.jpeg",
  // "050.jpeg",
  // "051.jpeg",
  // "052.jpeg",
  // "053.jpeg",
  // "054.jpeg",
  // "055.jpeg",
  // "056.jpeg",
  // "057.jpeg",
  // "058.jpeg",
  // "059.jpeg",
  // "060.jpeg",
  // "061.jpeg",
  // "062.jpeg",
  // "063.jpeg",
  // "064.jpeg",
  // "065.jpeg",
  // "066.jpeg",
  // "067.jpeg",
  // "068.jpeg",
  // "069.jpeg",
  // "070.jpeg",
  // "071.jpeg",
  // "072.jpeg",
  // "073.jpeg",
  // "074.jpeg",
  // "075.jpeg",
  // "076.jpeg",
  // "077.jpeg",
  // "078.jpeg",
  // "079.jpeg",
  // "080.jpeg",
  // "081.jpeg",
  // "082.jpeg",
  // "083.jpeg",
  // "084.jpeg",
  // "085.jpeg",
  // "086.jpeg",
  // "087.jpeg",
  // "088.jpeg",
  // "090.jpeg",
  // "091.jpeg",
  // "092.jpeg",
  // "093.jpeg",
  // "094.jpeg",
  // "095.jpeg",
  // "096.jpeg",
  // "097.jpeg",
  // "098.jpeg",
  // "099.jpeg",
  // "100.jpeg",
  // "101.jpeg",
  // "102.jpeg",
  // "103.jpeg",
  // "104.jpeg",
  // "105.jpeg",
  // "106.JPeG",
  // "107.jpeg",
  // "108.jpeg",
  // "109.jpeg",
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




// File upload logic
const storageService = firebase.storage();
const storageRef = storageService.ref();
let selectedFile;
handleFileUploadChange(e) {
    selectedFile = e.target.files[0];
}
handleFileUploadSubmit(e) {  
    const uploadTask = storageRef.child(`tributes/${selectedFile.name}`).put(selectedFile);
    uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    }, (error) => {
        // Handle unsuccessful uploads
        console.log(error);
    }, () => {
        // Do something once upload is complete
        alert('Upload finished, thank you for uploading a tribute video or image for Earl!');
    });
}

document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
document.querySelector('.file-submit').addEventListener('click', handleFileUploadSubmit);
