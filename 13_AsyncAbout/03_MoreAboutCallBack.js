//REVIEW

/**
1. couple of more example about call back
2. limitations and issues with callback??
3. Introduction new Promise API(ES6)
*/

// write into the file first and read the file..

function writeFile(text, callback) {
  console.log("Write the file and than read it");
  callback();
}
writeFile("Sample text", function () {
  console.log("Read the file.");
});


// callback issues....
function taskOne(argOne, callback) {
  if (error) {
    //handle the error..
  } else {
    function taskTwo() {
      if (error) {
        //handle the error..
      } else {
        function taskThree() {
          if (error) {
            //handle the error
          } else {
            // .....
          }
        }
      }
    }
  }
}
