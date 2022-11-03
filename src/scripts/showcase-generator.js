import Book from './classes.js'

import {showDetails} from './showcase-manager.js'

import { requestToApi3 } from './external-calls.js'

const booksShowcaseDiv = document.querySelector('.books-showcase')

let detailsButton="";

let Zsa =""

export function generateGUI(datafromAPI){
 
    for (let i=0; i < 12; i++)
    {
        //console.log(datafromAPI)
                                    //Lodash for path? 
        Zsa=new Book(datafromAPI.works[i].title, datafromAPI.works[i].authors[0].name,"https://covers.openlibrary.org/b/id/"+datafromAPI.works[i].cover_id+"-L.jpg", datafromAPI.works[i].key,"") 

        console.log("Autore:"+Zsa.author+" Titolo:"+Zsa.title+" i:"+i)

        let newBookContainer = document.createElement('div')
        newBookContainer.classList.add('book-container')
    
        
        //Alt su copertina dinamico?
        let newBookCover = document.createElement('img')
        newBookCover.classList.add('book-cover')
        newBookCover.src = Zsa.cover
        newBookCover.style = "width: 80px; height: 100px;"
    
        let newTitle = document.createElement('p')
        newTitle.classList.add('title-label')
        newTitle.innerText="\""+Zsa.title+"\""
    
        let newAuthor = document.createElement('p')
        newAuthor.classList.add('author-label')
        newAuthor.innerText = Zsa.author
    
        detailsButton = document.createElement('input')
        detailsButton.type = 'button'
        detailsButton.value = 'Details'
        detailsButton.classList.add('expand-details-button')
        detailsButton.onclick=showDetails
    
        newBookContainer.appendChild(newBookCover)
        newBookContainer.appendChild(newTitle)
        newBookContainer.appendChild(newAuthor)
        newBookContainer.appendChild(detailsButton)
    
        booksShowcaseDiv.appendChild(newBookContainer)

        //console.log(Book)
    }
}

export function generateGUI2(datafromAPI2){
    
    let authorKey= datafromAPI2.docs[0].key

    requestToApi3(authorKey)

}

export function generateGUI3(datafromAPI3)
{
    console.log(datafromAPI3)

    for (let i=0; i < 50; i++)
    {        
        Zsa=new Book(datafromAPI3.entries[i].title,"",/*"https://covers.openlibrary.org/b/id/"+datafromAPI3.entries[i].covers[0]+"-L.jpg" -> "TO FIX MISSING COVER*/ "assets/img/dummy-cover.jpeg", datafromAPI3.entries[i].key,"")

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
        Zsa=new Book(datafromAPI4.docs[i].title,datafromAPI4.docs[i].author_name,/*"https://covers.openlibrary.org/b/id/"+datafromAPI3.entries[i].covers[0]+"-L.jpg" -> "TO FIX MISSING COVER*/ "assets/img/dummy-cover.jpeg", datafromAPI4.docs[i].key,"")

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
}