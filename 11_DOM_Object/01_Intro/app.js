console.log("HTML Document");
let element;
//form tag and tag inside forms
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;

//Link Tags..
element = document.links;
element = document.links[0];
element = document.links[0].id;
element = document.links[0].className;
element = document.links[0].classList;

//script tags
let src = document.scripts;
let scrArray = Array.from(document.scripts);

//loop with an array
scrArray.forEach(function (src) {
  console.log(src.getAttribute("src"));
});

console.log(src);

element = document.querySelector("#task-title");
console.log(element);
