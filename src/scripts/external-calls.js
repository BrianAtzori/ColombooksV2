//--------- IMPORTS ---------

import * as dataManager from './data-manager';

import * as popUpManager from './pop-ups.js';


//--------- DECLARATIONS ---------

require('dotenv').config();

const axios = require('axios').default;

const loadingAnimationRunning = document.querySelector('.loading-animation')


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
    
    axios({

        method: 'get',

        url: createUrl("/subjects/",genre+".json")

    })
    .then((response) => dataManager.generateBooksCollection(response.data,"byGenre"))

    .finally(() => loadingAnimationRunning.style.display="none")

}

//Fetch Request to API, searching by Author

export async function findBookByAuthor(key,author){
    
    axios({

        method: 'get',

        url: createUrl("/authors/",key+"/works.json")
    })

    .then((response) => dataManager.generateBooksCollection(response.data,"byAuthor",author))

    .finally(() => loadingAnimationRunning.style.display="none")
    
}

//Fetch Request to API, searching by Title

export async function findBookByTitle(title){

    axios({

        method: 'get',
        
        url: createUrl("/search.json?q=",title)

    })

    .then((response) => dataManager.generateBooksCollection(response.data,"byTitle"))

    .finally(() => loadingAnimationRunning.style.display="none")
    
}

//Fetch the Description of the book and call the popup to show the text

export async function fetchBookDescription(bookKey)
{
    axios({
        method: 'get',
        url: createUrl("/",bookKey.substring(1)+".json")
    })

    .then((response) => response.data.description)

    .then((description) =>  popUpManager.generatePopUp("details",description))

}

//Auxiliary function to retrieve the author key and the name for the output

export async function findAuthorKey(author){

    axios({
        method: 'get',
        url: createUrl("/search/","authors.json?q="+author)
    })

    .then((response) => findBookByAuthor(response.data.docs[0].key,response.data.docs[0].name));

}
