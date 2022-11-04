//--------- IMPORTS ---------

import Book from './classes.js'

import * as showcaseGenerator from './showcase-generator';

import * as externalCallsManager from './external-calls'

//--------- DECLARATIONS ---------

const booksCollection = []

//--------- FUNCTIONS ---------

export function generateBooksCollection(responseFromApi)
{
    for (let i=0; i < responseFromApi.works.length; i++){

        let newBook = generateNewBook(responseFromApi.works[i].title, responseFromApi.works[i].authors[0].name,responseFromApi.works[i].cover_id, responseFromApi.works[i].key,"BOOK DETAILS NOT AVAIBLE")

        booksCollection.push(newBook)
    }

    showcaseGenerator.generateNewBooksShowcase(booksCollection)
}

function generateNewBook(title, authors,coverId,key,details){

    let generatedBook = new Book(title,authors,coverId,key, details)

    generatedBook.details = externalCallsManager.fetchBookDescription(key)

    return generatedBook
}