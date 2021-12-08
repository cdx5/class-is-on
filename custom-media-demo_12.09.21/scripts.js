//Global variables
var video = document.getElementById('container');
var source = document.getElementById('current');

var playPause = document.getElementById('playPause');

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

var videoList = document.querySelectorAll('figcaption a');

var nextLink = videoList[1].getAttribute('href');
var nextID = videoList[1].getAttribute('id');

var prevLink = videoList[videoList.length-1].getAttribute('href');
var prevID = videoList[videoList.length-1].getAttribute('id');

//Executing functions
playPause.onclick = togglePlay;

nextButton.onclick = next; 
prevButton.onclick = prev;

for (var i=0; i < videoList.length; i++) {
	videoList[i].onclick = select;
}

//Defining functions
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    playPause.style.backgroundColor = 'forestgreen';
  } else {
    video.pause();
    playPause.style.backgroundColor = 'tomato';
  }
}

function select(e) {
	e.preventDefault();
	videoTarget = this.getAttribute('href');
    videoTargetID = this.getAttribute('ID');
	source.src = videoTarget;
	video.load();
	togglePlay();    
    updateNavigation();
}

function next() {
    videoTarget = nextLink;
    videoTargetID = nextID;
    source.src = videoTarget;
	video.load();
	togglePlay();    
    updateNavigation();
}

function prev() {
    videoTarget = prevLink;
    videoTargetID = prevID;
    source.src = videoTarget;
	video.load();
	togglePlay();    
    updateNavigation();
}

function updateNavigation() {
    if (videoTargetID == videoList.length-1) {
        nextLink = videoList[0].getAttribute('href');
        nextID = videoList[0].getAttribute('id');
    } else {
        nextLink = videoList[Number(videoTargetID)+1].getAttribute('href');
        nextID = videoList[Number(videoTargetID)+1].getAttribute('id');
    }
    if (videoTargetID == 0) {
        prevLink = videoList[videoList.length-1].getAttribute('href');
        prevID = videoList[videoList.length-1].getAttribute('id');
    } else {
        prevLink = videoList[Number(videoTargetID)-1].getAttribute('href');
        prevID = videoList[Number(videoTargetID)-1].getAttribute('id');
    }
    
    console.log('next = ' + nextLink + 'nextID = ' + nextID);
    console.log('prev = ' + prevLink + 'prevID = ' + prevID);
}