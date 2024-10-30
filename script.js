window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      var video = document.querySelector('video');
      video.play();
    }
  });