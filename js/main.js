// When the user presses a key, find the corresponding audio file on the page and play it //

(() => {
  console.log('drumkit js file loaded');

  //Run this whenever a key gets pressed down

  function removedHighlight(e){
    //console.log(e);
    if (e.propertyName != "transform") {
    return;
  } else {
    e.target.classList.remove('playing');
  }
  }


  function logKey(e) {
    //debugger;
    //console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //Add a class to whatever div you're in
    key.classList.add('playing');

    if (!audio) { return; }

    //Play the audio
    audio.currentTime = 0;
    audio.play()
  }


  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removedHighlight));

  window.addEventListener('keydown', logKey);
})();
