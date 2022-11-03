//--------- IMPORTS ---------

import Book from './classes.js'

import * as showcaseGenerator from './showcase-generator';

//--------- DECLARATIONS ---------

const booksCollection = []

//--------- FUNCTIONS ---------

export function generateBooksCollection(responseFromApi)
{
    for (let i=0; i < responseFromApi.works.length; i++){

        let generatedBook = generateNewBook(responseFromApi.works[i].title, datafromAPI.works[i].authors[0].name,cover_id+"-L.jpg", datafromAPI.works[i].key,"DETAILS")

        booksCollection.push(generatedBook)
    }

    showcaseGenerator.generateNewBooksShowcase(booksCollection)

}

function generateNewBook(){

    //obj creation

    //call for cover -> alt generation

    return generatedBook

}