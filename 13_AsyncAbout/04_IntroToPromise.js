//REVIEW

/**
1. Benefits about Promise.
  - Improve the code readability
  - Better handling to async operations
  - Better control over conditional flow (if-else or try-catch)
  - Promise API comes of try-catch in-built (Handle error/exception )

2. Phase or State of Promise..
   1. fulfilled : Action related to promise has been completed
   2. rejected: Action related to promise has been rejected.
   3. pending: Action is still in-progress and not completed
   4. settled: Action is fulfilled or rejected..
*/

// let demoPromise = new Promise(args);
// Parameter or args must be function..(resolve, rejected){}

// let demoPromiseTwo = new Promise(function (resolve, rejected) {
//   if (resolve) {
//     // if block will execute
//   } else {
//     //error or exception will execute..
//   }
// });

let printAfterSec = new Promise(function (resolve, rejected) {
  if (resolve) {
    setTimeout(function () {
      console.log("Done");
    }, 2000);
  } else {
    console.error("rejected or not done");
  }
});

//Call to the example ...
printAfterSec
  .then(function (result) {
    console.log(result);
  })
  .catch(function (rejected) {
    console.error(rejected);
  });

//Example Two

let isDB_Online = true;

//Promise to connect to DB and find the result.
/**
 * check if isDB_Online is true or false
 if true .... promise should throw resolve with dbConnectInfo
 if false.... promise should throw rejected with dbOffline error
 */

let connectDB = new Promise(function (resolve, rejected) {
  if (isDB_Online) {
    let dbConnectInfo = {
      userName: "Admin",
      passWord: "UserOne",
    };
    resolve(dbConnectInfo);
  } else {
    let dbOffline = new Error("Server is down and hading network issue");
    rejected(dbOffline);
  }
});

//only what about resolve..
connectDB
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  })
  .finally(function () {
    console.log("The process is completed..");
  });

// Same call with error functions
connectDB
  .then((result) => {
    return result;
  })
  .then((result) => {
    console.log("LOG the result with This line" + result.toString());
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Process is done..");
  });
