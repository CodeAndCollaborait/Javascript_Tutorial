//Promise Chaining...

// new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then((result) => {
//     console.log(result); // 1
//     return result * 2; // 1 * 2
//   })
//   .then((result) => {
//     console.log(result); // 2
//     return result * 2; // 2* 2
//   })
//   .then((result) => {
//     console.log(result + " Final Result"); // 4
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  Two functions
// 1. will generate random number between 1 to 6 .. roll the dice..
// 2. will promise functions that will check if number is even then it's resolve  else it's rejected..

function rollTheDice() {
  return Math.floor(Math.random() * 6 + 1);
}

let checkTheNumber = new Promise((resolve, rejected) => {
  let roll = rollTheDice();
  if (roll % 2 === 0) {
    resolve("It's an even number " + roll);
  } else {
    rejected(new Error("it's an Odd Number !") + roll);
  }
});

checkTheNumber
  .then((result) => {
    console.log(result);
    return result;
  })
  .catch((error) => {
    console.log(error);
  });
