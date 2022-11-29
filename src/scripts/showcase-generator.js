//--------- IMPORTS ---------

import { showDetails } from "./showcase-manager";

//--------- ELEMENTS ---------

const booksShowcaseDiv = document.querySelector(".books-showcase");

//--------- FUNCTIONS ---------

//Go through the Array of Books and append a new generated UI container

export function generateNewBooksShowcase(booksCollection) {
  for (let i = 0; i < booksCollection.length; i++) {
    let newBookContainer = generateBookContainer(booksCollection[i]);

    booksShowcaseDiv.appendChild(newBookContainer);
  }
}

//Generate new UI Container for a book using auxiliary functions to create HTML Elements

export function generateBookContainer(Book) {
  const elementsArray = [];

  let newBookContainer = document.createElement("div");

  newBookContainer.classList.add("book-container");

  //This can be done with only one function, maybe creating classes

  let newBookCover = generateNewCoverElement(
    Book.retrieveCover(),
    Book.title,
    Book.author
  ); //Retrieve the cover with the method of the Book Class

  elementsArray.push(newBookCover);

  let newBookTitle = generateNewTitleElement(Book.title);

  elementsArray.push(newBookTitle);

  let newAuthorLabel = generateNewAuthorElement(Book.author);

  elementsArray.push(newAuthorLabel);

  let newDetailsButton = generateNewDetailsButtonElement(Book.key);

  elementsArray.push(newDetailsButton);

  for (let i = 0; i < elementsArray.length; i++) {
    newBookContainer.appendChild(elementsArray[i]);
  }

  return newBookContainer;
}

//Generate HTML Elements

export function generateNewCoverElement(coverUrl, title, author) {
  let generatedBookCover = document.createElement("img");

  generatedBookCover.classList.add("book-cover");

  generatedBookCover.src = coverUrl;

  generatedBookCover.style = "width: 80px; height: 100px;";

  //Dynamically generated alt for accessibility

  generatedBookCover.alt =
    "Cover of the book " + title + " written by " + author;

  return generatedBookCover;
}

export function generateNewTitleElement(title) {
  let generatedBookTitle = document.createElement("p");

  generatedBookTitle.classList.add("title-label");

  generatedBookTitle.innerText = '"' + title + '"';

  return generatedBookTitle;
}

export function generateNewAuthorElement(author) {
  let generatedBookAuthor = document.createElement("p");

  generatedBookAuthor.classList.add("author-label");

  generatedBookAuthor.innerText = author;

  return generatedBookAuthor;
}

export function generateNewDetailsButtonElement(bookKey) {
  let generatedDetailsButton = document.createElement("input");

  generatedDetailsButton.type = "button";

  generatedDetailsButton.value = "Details";

  generatedDetailsButton.classList.add("expand-details-button");

  generatedDetailsButton.setAttribute("data-relatedbookkey", bookKey);

  //Add a dynamic event listener that trigger the popup generation with book description click > book key > show details > retrieve description > show popup

  generatedDetailsButton.addEventListener("click", function (event) {
    const detailsButtonClicked = event.target;

    showDetails(detailsButtonClicked.getAttribute("data-relatedbookkey"));
  });

  return generatedDetailsButton;
}

export function generateBlankShowcase() {
  let blankLabel = document.createElement("h2");

  blankLabel.innerText =
    "There are no books matching the parameters! Try with something else :(";

  booksShowcaseDiv.appendChild(blankLabel);
}
