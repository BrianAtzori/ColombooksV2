require('dotenv').config();
const axios = require('axios').default;

import * as showcaseGenerator from './showcase-generator';

//Try & Catch?

export async function requestToApi(genre){

    //Check for better method
    /*
    fetch(process.env.BASE_URL+"subjects/"+genre+".json")
    .then((response) => response.json())
    .then((data) => showcaseGenerator.generateGUI(data)); //Call verso Data Manager */

    axios({
        method: 'get',
        url: process.env.BASE_URL+"subjects/"+genre+".json"
    })
    .then((response) => showcaseGenerator.generateGUI(response.data)); //Call verso Data Manager

}

export async function requestToApi2(author){

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
}
