//--------- IMPORTS ---------

import * as dataManager from './data-manager';

import * as popUpManager from './pop-ups.js';

//--------- DECLARATIONS ---------

require('dotenv').config();

const axios = require('axios').default;

const loadingAnimation = document.querySelector('.loading-animation')


//--------- FUNCTIONS ---------

//Generate URLs to fetch

function createUrl(queryFields, userQuery)
{
    let queryUrl = process.env.BASE_URL+queryFields+userQuery

    console.log(queryUrl)

    return queryUrl
}

//Fetch Request to API, searching by genre

export async function findBookByGenre(genre){
    
    loadingAnimation.style.display="block"

    axios({
        method: 'get',
        url: createUrl("/subjects/",genre+".json")
    })
    .then((response) => dataManager.generateBooksCollection(response.data,"byGenre"))
    .finally(() => loadingAnimation.style.display="none")
}

export async function fetchBookDescription(bookKey)
{
    axios({
        method: 'get',
        url: createUrl("/",bookKey.substring(1)+".json")
    })
    .then((response) => response.data.description)
    .then((description) =>  popUpManager.generatePopUp("details",description))
}

export async function findAuthorKey(author){

    axios({
        method: 'get',
        url: createUrl("/search/","authors.json?q="+author)
    })
    .then((response) => findBookByAuthor(response.data.docs[0].key,response.data.docs[0].name));
}

export async function findBookByAuthor(key,author){
    
    loadingAnimation.style.display="block"

       axios({
        method: 'get',
        url: createUrl("/authors/",key+"/works.json")
    })
    .then((response) => dataManager.generateBooksCollection(response.data,"byAuthor",author))
    .finally(() => loadingAnimation.style.display="none")
}

export async function findBookByTitle(title){

    loadingAnimation.style.display="block"

    axios({
        method: 'get',
        url: createUrl("/search.json?q=",title)
    })
    .then((response) => dataManager.generateBooksCollection(response.data,"byTitle"))
    .finally(() => loadingAnimation.style.display="none")
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
