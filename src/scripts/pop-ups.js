//--------- ELEMENTS ---------

const overlayBackground = document.querySelector("#overlay");

const popUpWindow = document.querySelector(".popup-window");

const popUpWindowTitle = document.querySelector(".popup-window-title");

const popUpWindowBody = document.querySelector(".popup-window-body");

//--------- FUNCTIONS ---------

//Generate Popups based on the type of data to show

export function generatePopUp(popUpType, data) {
  overlayBackground.classList.add("active");

  switch (popUpType) {
    case "info":
      popUpWindowTitle.innerHTML = "Guide to Colombooks";

      //Set to guide if i click the info button after clicking details button

      popUpWindowBody.innerHTML =
        "<p>Hello! Welcome* to the <strong>Colombooks</strong> guide :)<br><br></p><p>This is a small application that through the <strong>openlibrary.org</strong> API will allow you to search for books within an online archive.<br><br></p><p>On Colombooks you will be able to perform three types of searches:<br><br></p><p>1)<strong>By genre</strong>: typing the name of a genre Colombooks will return the books that according to the archive are found to belong to that genre.&nbsp;<br><br></p><p>2)<strong>By author</strong>: entering the name of your favorite author will search for all the books that that author has written or contributed to.<br><br></p><p>3)<strong>By title</strong>: search for any book by entering the title or part of the title, and Colombooks will return books that match the words you enter!<br><br></p><p>By clicking on the details you will be able to view the <strong>description</strong> of the book!<br><br></p><p><span style='text-decoration: underline;'><strong>!!!!WARNING!!!</strong></span> Some books are missing some data, such as covers and descriptions.<br><br></p><p>This app was developed as a study project by <strong>Brian Atzori</strong>, a student at the online university <strong>Start2Impact</strong>.<br><br></p><p>&nbsp;</p>";

      popUpWindow.classList.add("active");

      break;

    case "details":
      data =
        data === undefined
          ? "The book description is not available in the archive."
          : data;

      popUpWindowTitle.innerHTML = "Description:";

      popUpWindowBody.innerHTML = data;

      popUpWindow.classList.add("active");
      break;
  }
}

//Close the active popup

export function closePopUp() {
  overlayBackground.classList.remove("active");
  popUpWindow.classList.remove("active");
}
