var keyData = {
  q: {
    color: "rgb(73, 118, 255)",
    sound: new Howl({
      src: ['assets/sounds/corona.mp3']
    })
  },
  w: {
    color: "rgb(178, 133, 15)",
    sound: new Howl({
      src: ['assets/sounds/dotted-spiral.mp3']
    })
  },
  e: {
    color: "rgb(255, 130, 99)",
    sound: new Howl({
      src: ['assets/sounds/flash-1.mp3']
    })
  },
  r: {
    color: "rgb(131, 204, 38)",
    sound: new Howl({
      src: ['assets/sounds/flash-2.mp3']
    })
  },
  t: {
    color: "rgb(255, 31, 151)",
    sound: new Howl({
      src: ['assets/sounds/flash-3.mp3']
    })
  },
  y: {
    color: "rgb(204, 72, 34)",
    sound: new Howl({
      src: ['assets/sounds/glimmer.mp3']
    })
  },
  u: {
    color: "rgb(255, 231, 56)",
    sound: new Howl({
      src: ['assets/sounds/moon.mp3']
    })
  },
  i: {
    color: "rgb(106, 178, 30)",
    sound: new Howl({
      src: ['assets/sounds/pinwheel.mp3']
    })
  },
  o: {
    color: "rgb(4, 183, 204)",
    sound: new Howl({
      src: ['assets/sounds/piston-1.mp3']
    })
  },
  p: {
    color: "rgb(178, 4, 97)",
    sound: new Howl({
      src: ['assets/sounds/piston-2.mp3']
    })
  },
  a: {
    color: "rgb(13, 161, 178)",
    sound: new Howl({
      src: ['assets/sounds/bubbles.mp3']
    })
  },
  s: {
    color: "rgb(47, 103, 52)",
    sound: new Howl({
      src: ['assets/sounds/clay.mp3']
    })
  },
  d: {
    color: "rgb(178, 83, 95)",
    sound: new Howl({
      src: ['assets/sounds/confetti.mp3']
    })
  },
  f: {
    color: "rgb(110, 68, 204)",
    sound: new Howl({
      src: ['assets/sounds/piston-3.mp3']
    })
  },
  g: {
    color: "rgb(136, 255, 152)",
    sound: new Howl({
      src: ['assets/sounds/prism-1.mp3']
    })
  },
  h: {
    color: "rgb(255, 144, 158)",
    sound: new Howl({
      src: ['assets/sounds/prism-2.mp3']
    })
  },
  j: {
    color: "rgb(121, 204, 128)",
    sound: new Howl({
      src: ['assets/sounds/prism-3.mp3']
    })
  },
  k: {
    color: "rgb(255, 184, 110)",
    sound: new Howl({
      src: ['assets/sounds/splits.mp3']
    })
  },
  l: {
    color: "rgb(197, 176, 255)",
    sound: new Howl({
      src: ['assets/sounds/squiggle.mp3']
    })
  },
  z: {
    color: "rgb(178, 70, 39)",
    sound: new Howl({
      src: ['assets/sounds/strike.mp3']
    })
  },
  x: {
    color: "rgb(125, 105, 178)",
    sound: new Howl({
      src: ['assets/sounds/suspension.mp3']
    })
  },
  c: {
    color: "rgb(178, 120, 59)",
    sound: new Howl({
      src: ['assets/sounds/timer.mp3']
    })
  },
  v: {
    color: "rgb(102, 68, 103)",
    sound: new Howl({
      src: ['assets/sounds/ufo.mp3']
    })
  },
  b: {
    color: "rgb(94, 127, 255)",
    sound: new Howl({
      src: ['assets/sounds/veil.mp3']
    })
  },
  n: {
    color: "rgb(255, 227, 202)",
    sound: new Howl({
      src: ['assets/sounds/wipe.mp3']
    })
  },
  m: {
    color: "rgb(164, 255, 68)",
    sound: new Howl({
      src: ['assets/sounds/zig-zag.mp3']
    })
  }
}

var circles = [];

function onKeyDown(event) {
  if(keyData[event.key]) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 300);
    newCircle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    circles.push(newCircle);
  }
}

function onFrame(event) {
  for(var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue +=1;
    circles[i].scale(.9);
  }
}
