//--------- IMPORTS ---------

import Book from './classes.js'

import * as showcaseGenerator from './showcase-generator';


//--------- DECLARATIONS ---------

const booksCollection = []

//--------- FUNCTIONS ---------

export function generateBooksCollection(responseFromApi, queryType, author)
{
    switch(queryType)
    {
        case 'byGenre':

                for (let i=0; i < responseFromApi.works.length; i++){

                    let newBook = generateNewBook(responseFromApi.works[i].title, responseFromApi.works[i].authors[0].name,responseFromApi.works[i].cover_id, responseFromApi.works[i].key)

                    booksCollection.push(newBook)
                }
                break;

        case 'byAuthor':

                for(let i=0; i<responseFromApi.entries.length; i++){

                     let newBook = generateNewBook(responseFromApi.entries[i].title, author,responseFromApi.entries[i].covers, responseFromApi.entries[i].key)

                    booksCollection.push(newBook)
                }

                break;

        case 'byTitle':

                console.log(responseFromApi)

                for(let i=0; i<responseFromApi.docs.length; i++){

                    let newBook = generateNewBook(responseFromApi.docs[i].title, responseFromApi.docs[i].author_name,responseFromApi.docs[i].cover_i, responseFromApi.docs[i].key)

                    booksCollection.push(newBook)
                }

                break;

    }

    showcaseGenerator.generateNewBooksShowcase(booksCollection)
}

function generateNewBook(title, authors,coverId,key,details){

    let generatedBook = new Book(title,authors,coverId,key, details)

    return generatedBook
}