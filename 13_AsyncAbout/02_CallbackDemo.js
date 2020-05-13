/**
//REVIEW 
  1 . Callback function with object as example
*/
//TODO write the posts object in HTML page
//TODO create function that post more message
//TODO always load new POST once it's created ..

const posts = [
  { title: "postOne", body: "Some text about postOne" },
  { title: "postTwo", body: "Some text about postTwo" },
];

//Read the posts object print each post into HTML page.
//READ will take 1 sec write function will take 2
// Write should always execute before read..

let outPut = "";
function printPost() {
  setTimeout(() => {
    posts.forEach((post) => {
      outPut += `<li>${post.title} :=>  ${post.body}</li>`;
    });
    document.body.innerHTML = outPut;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

let postThree = { title: "PostThree", body: "Some Text About post Three" };
// createPost(postThree);
// printPost();
createPost(postThree, printPost);
