/**
 Old version
 1. callback function ? 
    callback function is function call within the function
 2. Asynchronous and Synchronous 

Asynchronous: process will run with wait (will not wait)
Synchronous : process will only upon first process is done

*/

function add(a, b) {
  console.log(a + b);
}

function display() {
  console.log("The sum of two variables is: ");
}

// setTimeout(function () {
//   add(10, 20);
// }, 2000);

// display();

function connectTheDatabase(numTwo, callback) {
  // 2 sec to connect ...
  console.log("DB is connected");
  console.log(numTwo);
  callback(75, printDBConnection);
}

function readWriteDB(num, callback) {
  console.log("readWriteDB -> num", num);
  // 1 sec to read the information
  console.log("Read the information from database");
  callback();
}

function printDBConnection() {
  console.log("DB in progress ...");
}
// setTimeout(() => {
//   connectTheDatabase(readWriteDB);
// },2000);

// setTimeout(() => {
//   readWriteDB();
// }, 1000);
connectTheDatabase(50, readWriteDB);

function getNames(names) {
  console.log("Hello " + names);
}

getNames("JS");
