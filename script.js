window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    var video = document.querySelector('video');
    video.play();
  }
});

let nikname = document.getElementById("nikname")

