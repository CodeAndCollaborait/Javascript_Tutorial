//REVIEW
/**
1. Promise.all();  return result of multiple promise as single object...
2. Promise.allSettled(); will return result of all the promise only when all the promises are settled...(will not give you pending status)
3. Promise.race(); very similar to all().. but only return the first settled promise result..
*/

// Example of Promise.all().. three promise inside one array..

// Promise.all(that take multiple promise as args. or an array);

let promiseAll = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("One");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Two");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Three");
    }, 1000);
  }),
]);

promiseAll.then((result) => {
  console.log(result);
});

let Urls = [
  "https://jsonplaceholder.typicode.com/",
  "https://yahoo.com/",
  "https://google.com/",
];

let request = Urls.map((url) => console.log(url));

Promise.allSettled(request).then((result) => {
  result.forEach((responseCode) => {
    console.log(`${responseCode.url}: ${responseCode.status}`);
  });
});

let promiseRace = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("One");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Two");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Three");
    }, 1000);
  }),
]);

promiseRace.then((result) => {
  console.log(result);
});
