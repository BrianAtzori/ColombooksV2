//--------- IMPORTS ---------

import Book from './classes.js'

import * as showcaseGenerator from './showcase-generator';


//--------- DECLARATIONS ---------

const booksCollection = []


//--------- FUNCTIONS ---------

//Create an Array of Books, generating the books with the data from the api depending on the type of query

export function generateBooksCollection(responseFromApi, queryType, author)
{   

    switch(queryType)
    {
        case 'byGenre':

                for (let i=0; i < responseFromApi.works.length; i++)
                {

                    let newBook = generateNewBook(responseFromApi.works[i].title, responseFromApi.works[i].authors[0].name,responseFromApi.works[i].cover_id, responseFromApi.works[i].key)

                    booksCollection.push(newBook)

                }

                break;

        case 'byAuthor':

                for(let i=0; i<responseFromApi.entries.length; i++)
                {

                    let newBook = generateNewBook(responseFromApi.entries[i].title, author, selectCover(responseFromApi.entries[i].covers), responseFromApi.entries[i].key)

                    booksCollection.push(newBook)

                }

                break;

        case 'byTitle':

                console.log(responseFromApi)

                for(let i=0; i<responseFromApi.docs.length; i++)
                {

                    let newBook = generateNewBook(responseFromApi.docs[i].title, responseFromApi.docs[i].author_name,responseFromApi.docs[i].cover_i, responseFromApi.docs[i].key)

                    booksCollection.push(newBook)

                }

                break;

    }

    //Sort the array using the titles by alphabetical order

    booksCollection.sort((a,b) =>{

        if(a.title > b.title)
        {
            return 1;
        }

        if(b.title > a.title)
        {
            return -1;
        }

        return 0;

    })

    //Call the GUI Generation

    console.log(booksCollection)

    if(booksCollection.length === 0){

        showcaseGenerator.generateBlankShowcase()

    }

    else{

        showcaseGenerator.generateNewBooksShowcase(booksCollection)

    }

}

//Create the Book with the constructor using given data

function generateNewBook(title, authors,coverId,key,details)
{

    let generatedBook = new Book(title,authors,coverId,key, details)

    return generatedBook

}

//Called from main to empty the collection after a search

export function emptyBookCollection()
{

    booksCollection.length = 0

}

//Used to manage multiple covers output returned from searchByAuthor

function selectCover(covers)
{
    let coversArray = []

    coversArray = covers != undefined ? covers.toString().split(",") : undefined

    if (coversArray != undefined)
    {

        return coversArray[0]

    }
    else
    {

        return undefined

    }

}