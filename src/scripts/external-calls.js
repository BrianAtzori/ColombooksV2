//--------- IMPORTS ---------

import * as dataManager from './data-manager';


//--------- DECLARATIONS ---------

require('dotenv').config();
const axios = require('axios').default;


//--------- FUNCTIONS ---------

//Generate URLs to fetch

function createUrl(queryFields, userQuery)
{
    let queryUrl = process.env.BASE_URL+queryFields+userQuery

    return queryUrl
}

//Fetch Request to API, searching by genre

export async function findBookByGenre(genre){

    axios({
        method: 'get',
        url: createUrl("subjects/",genre+".json")
    })
    .then((response) => dataManager.generateBooksCollection(response.data));
}

export async function fetchBookDescription(bookKey)
{
    axios({
        method: 'get',
        url: createUrl("",bookKey.substring(1)+".json")
    })
    .then((response) => console.log(response.data.description));
}

/*export async function requestToApi2(author){

    fetch("https://openlibrary.org/search/authors.json?q="+author)
    .then((response) => response.json())
    .then((data) => showcaseGenerator.generateGUI2(data));

}

export async function requestToApi3(authorKey)
{    
    fetch("https://openlibrary.org/authors/"+authorKey+"/works.json")
    .then((response)=> response.json())
    .then((data) => showcaseGenerator.generateGUI3(data));
}

export async function requestToApi4(title)
{    
    fetch("https://openlibrary.org/search.json?q="+title)
    .then((response)=> response.json())
    .then((data) => showcaseGenerator.generateGUI4(data));
}*/
