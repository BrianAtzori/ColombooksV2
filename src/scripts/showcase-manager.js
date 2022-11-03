import * as popUpManager from './pop-ups.js'

export function showDetails()
{
    console.log("Sono Entrato qui")
    
    fetch("https://openlibrary.org"+Book.key+".json")
    .then((response) => response.json())
    .then((data) => Book.details = data);

    popUpManager.generatePopUp("details")
}