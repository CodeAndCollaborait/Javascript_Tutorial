//Book as a Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}

//Add the book...
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");

  const row = document.createElement("tr");

  //insert the cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
};

//clear the book fields
UI.prototype.clearFields = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.deleteBook = (target) => {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

//Show alert message
UI.prototype.showAlert = function (message, className) {
  //create div so we push the alert
  const div = document.createElement("div");

  // Add class
  div.className = `alert ${className}`;

  //Add text
  div.appendChild(document.createTextNode(message));

  //Get parent
  const container = document.querySelector(".container");

  //get From
  const form = document.querySelector("#book-form");

  //inset alert
  container.insertBefore(div, form);

  //Set the timeout
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

document.getElementById("book-form").addEventListener("submit", function (e) {
  //Get the value of title, author and isbn number

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //Add the new book into table
  const book = new Book(title, author, isbn);

  //insert into UI
  const ui = new UI();

  //validation
  if (title === "" || author === "" || isbn === "") {
    //error
    ui.showAlert("Please fill in all the fields", "error");
  } else {
    ui.addBookToList(book);
    ui.showAlert("Book Added!", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

// Event to clear or delete the book
document.getElementById("book-list").addEventListener("click", (e) => {
  //Get UI object
  const ui = new UI();
  ui.deleteBook(e.target);

  ui.showAlert("Book Removed!", "success");
  e.preventDefault();
});
