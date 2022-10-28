import * as popUpManager from './pop-ups.js'

const detailsButtonPopUp = document.querySelector('.info-window')

export function showDetails()
{

    console.log("Sono Entrato qui")
    
    fetch("https://openlibrary.org"+Book.key+".json")
    .then((response) => response.json())
    .then((data) => Book.details = data);

    popUpManager.openDetailsWindowPopuUp(detailsButtonPopUp)

}