const fs = require('fs');
// 1 - What floor does Santa end up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
  fs.readFile('./santa.txt', (err, data) => {
    if (err) console.log('error', err);
    console.time('q1 = santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === '(') return acc += 1;
      else if (currentValue === ')') return acc -= 1;
    }, 0);
    console.timeEnd('q1 = santa-time');
    console.log('floor:', answer);
  });
}

question1();

// 2 - When does Santa first enter the basement
function question2() {
  fs.readFile('./santa.txt', (err, data) => {
    if (err) console.log('error', err);
    console.time('q2 = santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if (currentItem === '(') accumulator++;
      else if (currentItem === ')') accumulator--;
      counter++;
      return accumulator < 0;
    });
    console.timeEnd('q2 = santa-time');
    console.log('basement entered at: ', counter);
  });
};

question2()