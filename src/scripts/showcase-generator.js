//--------- IMPORTS ---------

import * as showcaseManager from './showcase-manager.js' 


//--------- ELEMENTS ---------

const booksShowcaseDiv = document.querySelector('.books-showcase')


//--------- FUNCTIONS ---------

export function generateNewBooksShowcase(booksCollection)
{

    for (let i=0; i<booksCollection.length; i++){

        let newBookContainer=generateBookContainer(booksCollection[i])

        booksShowcaseDiv.appendChild(newBookContainer)

    }
}

export function generateBookContainer(Book)
{
    const elementsArray =[]

    let newBookContainer=document.createElement('div')

    newBookContainer.classList.add('book-container')

    //This can be done with only one function, maybe creating classes

    let newBookCover = generateNewCoverElement(Book.retrieveCover(), Book.title, Book.author)
    elementsArray.push(newBookCover)

    let newBookTitle = generateNewTitleElement(Book.title)
    elementsArray.push(newBookTitle)

    let newAuthorLabel = generateNewAuthorElement(Book.author)
    elementsArray.push(newAuthorLabel)

    let newDetailsButton = generateNewDetailsButtonElement(Book.key)
    elementsArray.push(newDetailsButton)

    for (let i=0; i<elementsArray.length; i++){
        newBookContainer.appendChild(elementsArray[i])
    }

    return newBookContainer
}

export function generateNewCoverElement(coverUrl, title, author)
{
    let generatedBookCover = document.createElement("img")

    generatedBookCover.classList.add('book-cover')

    generatedBookCover.src = coverUrl

    generatedBookCover.style = "width: 80px; height: 100px;"

    generatedBookCover.alt ="Cover of the book "+title+" written by "+author

    return generatedBookCover
}

export function generateNewTitleElement(title)
{
    let generatedBookTitle = document.createElement('p')

    generatedBookTitle.classList.add('title-label')

    generatedBookTitle.innerText="\""+title+"\""

    return generatedBookTitle
}

export function generateNewAuthorElement(author)
{
    let generatedBookAuthor = document.createElement('p')

    generatedBookAuthor.classList.add('author-label')

    generatedBookAuthor.innerText=author

    return generatedBookAuthor
}

export function generateNewDetailsButtonElement(bookKey)
{
    let generatedDetailsButton = document.createElement('input')

    generatedDetailsButton.type = 'button'

    generatedDetailsButton.value = 'Details'

    generatedDetailsButton.classList.add('expand-details-button')

    generatedDetailsButton.setAttribute("data-relatedbookkey",bookKey)

    generatedDetailsButton.addEventListener('click', function(event) {
        const detailsButtonClicked = event.target;
        showcaseManager.showDetails(detailsButtonClicked.getAttribute('data-relatedbookkey'))
    })

    return generatedDetailsButton
}

/*export function generateGUI2(datafromAPI2){
    
    let authorKey= datafromAPI2.docs[0].key

    requestToApi3(authorKey)

}*/

/*export function generateGUI3(datafromAPI3)
{
    console.log(datafromAPI3)

    for (let i=0; i < 50; i++)
    {        
        Zsa=new Book(datafromAPI3.entries[i].title,"",/*"https://covers.openlibrary.org/b/id/"+datafromAPI3.entries[i].covers[0]+"-L.jpg" -> "TO FIX MISSING COVER "assets/img/dummy-cover.jpeg", datafromAPI3.entries[i].key,"")


        let newBookContainer = document.createElement('div')
        newBookContainer.classList.add('book-container')
    
        
        //Alt su copertina dinamico?
        let newBookCover = document.createElement('img')
        newBookCover.classList.add('book-cover')
        newBookCover.src = Zsa.cover
        newBookCover.style = "width: 80px; height: 100px;"
    
        let newTitle = document.createElement('p')
        newTitle.classList.add('title-label')
        newTitle.innerText=Zsa.title
    
        let newAuthor = document.createElement('p')
        newAuthor.classList.add('author-label')
        newAuthor.innerText = Zsa.author
    
        let detailsButton = document.createElement('input')
        detailsButton.type = 'button'
        detailsButton.value = 'Details'
        detailsButton.classList.add('expand-details-button')
    
        newBookContainer.appendChild(newBookCover)
        newBookContainer.appendChild(newTitle)
        newBookContainer.appendChild(newAuthor)
        newBookContainer.appendChild(detailsButton)
    
        booksShowcaseDiv.appendChild(newBookContainer)

        //console.log(Book)
    }
}

export function generateGUI4(datafromAPI4)
{
    console.log(datafromAPI4)

    for (let i=0; i < datafromAPI4.docs.length; i++)
    {        
        Zsa=new Book(datafromAPI4.docs[i].title,datafromAPI4.docs[i].author_name,/*"https://covers.openlibrary.org/b/id/"+datafromAPI3.entries[i].covers[0]+"-L.jpg" -> "TO FIX MISSING COVER "assets/img/dummy-cover.jpeg", datafromAPI4.docs[i].key,"")

        //console.log("Autore:"+Zsa.author+" Titolo:"+Zsa.title+" i:"+i)

        let newBookContainer = document.createElement('div')
        newBookContainer.classList.add('book-container')
    
        
        //Alt su copertina dinamico?
        let newBookCover = document.createElement('img')
        newBookCover.classList.add('book-cover')
        newBookCover.src = Zsa.cover
        newBookCover.style = "width: 80px; height: 100px;"
    
        let newTitle = document.createElement('p')
        newTitle.classList.add('title-label')
        newTitle.innerText=Zsa.title
    
        let newAuthor = document.createElement('p')
        newAuthor.classList.add('author-label')
        newAuthor.innerText = Zsa.author
    
        let detailsButton = document.createElement('input')
        detailsButton.type = 'button'
        detailsButton.value = 'Details'
        detailsButton.classList.add('expand-details-button')
        detailsButton.addEventListener('click', showDetails)
    
        newBookContainer.appendChild(newBookCover)
        newBookContainer.appendChild(newTitle)
        newBookContainer.appendChild(newAuthor)
        newBookContainer.appendChild(detailsButton)
    
        booksShowcaseDiv.appendChild(newBookContainer)

        //console.log(Book)
    }
}*/