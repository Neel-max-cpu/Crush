// console.log("hello world");

// const video = document.getElementById('video-background');

// video.addEventListener('ended', function(){
//     video.pause();
//     ask.classList.remove('hidden-text');
// });

// window.addEventListener('beforeunload', function(){
//     video.load();
// });


// function moveButton(){
//     const button = document.querySelector('.button2');

//     const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
//     const randomY = Math.random() * (window.innerHeight - button.offsetHeight);

//     button.style.left = `${randomX}px`;
//     button.style.top = `${randomY}px`;
// }





// function playvideo() {
//     ask.classList.add('hidden-text');

//     // Hide buttons
//     button1.style.display = 'none';
//     button2.style.display = 'none';

//     const overlayVideo = document.getElementById('overlayVideo');
//     const overlayText = document.getElementById('overlayText');

//     overlayVideo.src = "/elements/NewY2meta.app-Come sit with me-(1080p).mp4";

//     overlayVideo.load();
//     overlayVideo.play();

//     // Display the div with id 'vid'
//     vidDiv.style.display = 'block';

// }




console.log("hello world");

const video = document.getElementById('video-background');
const ask = document.getElementById('ask');
let button1, button2; // Declare the variables here
const vidDiv = document.getElementById('vid');

document.addEventListener('DOMContentLoaded', function() {
    button1 = document.querySelector('.button1'); // Initialize the variables within the DOMContentLoaded event
    button2 = document.querySelector('.button2');

    // Attach event listeners or perform other tasks here
});

video.addEventListener('ended', function () {
    video.pause();
    ask.classList.remove('hidden-text');
});

window.addEventListener('beforeunload', function () {
    video.load();
});

function moveButton() {
    const button = document.querySelector('.button2');

    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function playvideo() {
    ask.classList.add('hidden-text');

    // Hide buttons
    if (button1 && button2) {
        button1.style.display = 'none';
        button2.style.display = 'none';
    }

    const overlayVideo = document.getElementById('overlayVideo');
    const overlayText = document.getElementById('overlayText');

    overlayVideo.src = "/elements/NewY2meta.app-Come sit with me-(1080p).mp4";

    overlayVideo.load();
    overlayVideo.play();

    // Display the div with id 'vid'
    if (vidDiv) {
        vidDiv.style.display = 'block';
    }
}
