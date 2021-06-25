var video = document.querySelector('#videoElement');
// var canvas = document.getElementById('canvas');
// var context = convas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;

if (navigator.getUserMedia){

    navigator.getUserMedia({video:true}, handleVideo, videoError);
}

function handleVideo(stream){

    video.src= window.URL.createObjectURL(stream);
    // video.play();
}

function videoError(e) {
//    alert(e.name); 
}


// function snap() {
    
//     canvas.width = video.clientWidth;
//     convas.height = video.clientHeight;
//     context.drawImage(video, 0, 0);
// }
