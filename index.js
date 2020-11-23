var cloudElement = document.getElementById('cloud-div');

var animatedElem = cloudElement.animate(
  [{ transform: 'translate(100%,0)' }, { transform: 'translate(-100%,0)' }],
  {
    duration: 3000,
    iterations: Infinity,
    // playbackRate: -4,    
  }
);

var planeElement = document.getElementById('plane-div');

var planeInAnimation = planeElement.animate(
  [
    { transform: 'translate(-1000px,-400px)' },
    { transform: 'translate(600px,-200px)' },
    { transform: 'translate(800px,0px)' },
    { transform: 'translate(800px,200px)' },
    { transform: 'translate(2000px,200px)' },
  ],
  {
    duration: 10000,
    iterations: Infinity,
  }
);
