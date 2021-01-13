//process.stdout.write('\x07');

const userInput = process.argv.slice(2);

for (const time of userInput) {
  setTimeout(() => {
    if (time === '' || time <= 0 || isNaN(time) === true){
      clearTimeout()
    } else {
      process.stdout.write('\007');
    }
  }, time * 1000);
}
// setTimeout(() => {
//   process.stdout.write('\n');
// }, delay);