var utcSeconds = 1702840200;
var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
d.setUTCSeconds(utcSeconds);
if (new Date() > d ) document.body.classList.add('after-memorial'); 

var imgNumber = 0;
var path = ["002.jpeg",
  "image2.jpeg",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
  "image6.jpeg",
  "image7.jpeg",
  "001.jpeg",
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
  "image1.jpeg",
  "image8.jpeg",
  "image9.jpeg",
  "image10.jpeg",
  "image11.jpeg",
  "image12.jpeg",
  "image13.jpeg",
  "image14.jpeg",
  "image15.jpeg",
  "image16.jpeg",
  "image17.jpeg",
  "image18.jpeg",
  "image19.jpeg",
  "image20.jpeg",
  "image21.jpeg",
  "image22.jpeg",
  "image23.jpeg",
  "image24.jpeg",
  "image25.jpeg",
  "image26.jpeg",
  "image27.jpeg",
  "image28.jpeg",
  "image29.jpeg",
  "image30.jpeg",
  "image31.jpeg",
  "image32.jpeg",
  "image33.jpeg",
  "image34.jpeg",
  "image35.jpeg",
  "image36.jpeg",
  "image37.jpeg",
  "image38.jpeg",
  "image39.jpeg",
  "image40.jpeg",
  "image41.jpeg",
  "image42.jpeg",
  "image43.jpeg",
  "image44.jpeg",
  "image45.jpeg",
  "image46.jpeg",
  "image47.jpeg",
  "image48.jpeg",
  "image49.jpeg",
  "image50.jpeg",
  "image51.jpeg",
  "image52.jpeg",
  "image53.jpeg",
  "image54.jpeg",
  "image55.jpeg",
  "image56.jpeg",
  "image57.jpeg",
  "image58.jpeg",
  "image59.jpeg",
  "image60.jpeg",
  "image61.jpeg",
  "image62.jpeg",
  "image63.jpeg",
  "image64.jpeg",
  "image65.jpeg",
  "image66.jpeg",
  "image67.jpeg",
  "image68.jpeg",
  "image69.jpeg",
  "image70.jpeg",
  "image71.jpeg",
  "image72.jpeg",
  "image73.jpeg",
  "image74.jpeg",
  "image75.jpeg",
  "image76.jpeg",
  "image77.jpeg",
  "image78.jpeg",
  "image79.jpeg",
  "image80.jpeg",
  "image81.jpeg",
  "image82.jpeg",
  "image83.jpeg",
  "image84.jpeg",
  "image85.jpeg",
  "image86.jpeg",
  "image87.jpeg",
  "image88.jpeg",
  "image89.jpeg",
  "image90.jpeg",
  "image91.jpeg",
  "image92.jpeg",
  "image93.jpeg",
  "image94.jpeg",
  "image95.jpeg",
  "image96.jpeg",
  "image97.jpeg",
  "image98.jpeg",
  "image99.jpeg",
  "image100.jpeg",
  "image101.jpeg",
  "image102.jpeg",
  "image103.jpeg",
  "image104.jpeg",
  "image105.jpeg",
  "image106.jpeg",
  "image107.jpeg",
  "image108.jpeg",
  "image109.jpeg",
  "image110.jpeg",
  "image111.jpeg",
  "image112.jpeg",
  "image113.jpeg",
  "image114.jpeg",
  "image115.jpeg",
  "image116.jpeg",
  "image117.jpeg",
  "image118.jpeg",
  "image119.jpeg",
  "image120.jpeg",
  "image121.jpeg",
  "image122.jpeg",
  "image123.jpeg",
  "image124.jpeg",
  "image125.jpeg",
  "image126.jpeg",
  "image127.jpeg",
  "image128.jpeg",
  "image129.jpeg",
  "image130.jpeg",
  "image131.jpeg",
  "image132.jpeg",
  "image133.jpeg",
  "image134.jpeg",
  "image135.jpeg",
  "image136.jpeg",
  "image137.jpeg",
  "image138.jpeg",
  "image139.jpeg",
  "image140.jpeg",
  "image141.jpeg",
  "image142.jpeg",
  "image143.jpeg",
  "image144.jpeg",
  "image145.jpeg",
  "image146.jpeg",
  "image147.jpeg",
  "image148.jpeg",
  "image149.jpeg",
  "image150.jpeg",
  "image151.jpeg",
  "image152.jpeg",
  "image153.jpeg",
  "image154.jpeg",
  "image155.jpeg",
  "image156.jpeg",
  "image157.jpeg",
  "image158.jpeg",
  "image159.jpeg",
  "image160.jpeg",
  "image161.jpeg",
  "image162.jpeg",
  "image163.jpeg",
  "image164.jpeg",
  "image165.jpeg",
  "image166.jpeg",
  "image167.jpeg",
  "image168.jpeg",
  "image169.jpeg",
  "image170.jpeg",
  "image171.jpeg",
  "image172.jpeg",
  "image173.jpeg",
  "image174.jpeg",
  "image175.jpeg",
  "image176.jpeg",
  "image177.jpeg",
  "image178.jpeg",
  "image179.jpeg",
  "image180.jpeg",
  "image181.jpeg",
  "image182.jpeg",
  "image183.jpeg",
  "image184.jpeg",
  "image185.jpeg",
  "image186.jpeg",
  "image187.jpeg",
  "image188.jpeg",
  "image189.jpeg",
  "image190.jpeg",
  "image191.jpeg",
  "image192.jpeg",
  "image193.jpeg",
  "image194.jpeg",
  "image195.jpeg",
  "image196.jpeg",
  "image197.jpeg",
  "image198.jpeg",
  "image199.jpeg",
  "image200.jpeg",
  "image201.jpeg",
  "image202.jpeg",
  "image203.jpeg",
  "image204.jpeg",
  "image205.jpeg",
  "image206.jpeg",
  "image207.jpeg",
  "image208.jpeg",
  "image209.jpeg",
  "image210.jpeg",
  "image211.jpeg",
  "image212.jpeg",
  "image213.jpeg",
  "image214.jpeg",
  "image215.jpeg",
  "image216.jpeg",
  "image217.jpeg",
  "image218.jpeg",
  "image219.jpeg",
  "image220.jpeg",
  "image221.jpeg",
  "image222.jpeg",
  "image223.jpeg",
  "image224.jpeg",
  "image225.jpeg",
  "image226.jpeg",
  "image227.jpeg",
  "image228.jpeg",
  "image229.jpeg",
  "image230.jpeg",
  "image231.jpeg",
  "image232.jpeg",
  "image233.jpeg",
  "image234.jpeg",
  "image235.jpeg",
  "image236.jpeg",
  "image237.jpeg",
  "image238.png",
  "image239.jpeg",
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

function incrementNumber() {
  if (imgNumber == path.length) {
    imgNumber = 0;
  } else {
    imgNumber++;
  }
}

function runSlideshow() {
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
setTimer();

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

// (function() {
//     var mouseTimer = null, cursorVisible = true;

//     function disappearCursor() {
//         mouseTimer = null;
//         document.body.style.cursor = "none";
//         cursorVisible = false;
//     }

//     document.onmousemove = function() {
//         if (mouseTimer) {
//             window.clearTimeout(mouseTimer);
//         }
//         if (!cursorVisible) {
//             document.body.style.cursor = "default";
//             cursorVisible = true;
//         }
//         mouseTimer = window.setTimeout(disappearCursor, 1000);
//     };
// })();

// Disappearing Buttons

// var timedelay = 1;
// function delayCheck()
// {
// if(timedelay == 1)
// {
// $('#button').fadeOut();
// timedelay = 1;
// }
// timedelay = timedelay+1;
// }
// $(document).mousemove(function() {
// $('#button').fadeIn();
// timedelay = 1;
// clearInterval(_delay);
// _delay = setInterval(delayCheck, 1000);
// });
// // page loads starts delay timer
// _delay = setInterval(delayCheck, 1000);