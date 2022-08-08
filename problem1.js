
// problem for generating random number (1-6 or it can be anything)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getRandomInt(1,6));