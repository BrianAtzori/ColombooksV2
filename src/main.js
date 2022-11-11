//To Do:
//TryCatch su richieste
//Lodash for path
//Gestire risposta vuota se non trovo libri
//Pulizia PopUp
//Gestire copertina undefined / array di copertine
//Svuota dopo ricerca
//migliorare grafica popup
//loading animations overwritten
//animations

//--------- IMPORTS ---------

//Styles

import './styles/general-style.scss';

import './styles/header-style.scss';

import './styles/search-section-style.scss';

import './styles/books-showcase-style.scss';

//Javascript

import * as externalCalls from './scripts/external-calls.js'

import * as popUpManager from './scripts/pop-ups.js'


//--------- ELEMENTS ---------

const contentPage = document.querySelector('.content-page')

//Guide Window

const buttonShowInfo = document.querySelector('.icon-info')

const popUpWindowCloseButton= document.querySelector('.popup-window-close-button')

//Base Search Elements

const searchButton = document.querySelector('.search-button')

const genreToSearchInput = document.querySelector('.genre-search-bar')

const searchBarsContainers = document.querySelector('.search-container')

//Advanced Search Elements

const advancedSearchButton = document.querySelector('.advanced-search-button')

const advancedSearchFieldsContainer =document.querySelector('.advanced-search-input-container')

const advancedSearchAuthorInput = document.querySelector('.author-search-bar')

const advancedSearchTitleInput = document.querySelector('.title-search-bar')

//Showcase Elements

const blankShowcase = document.querySelector('.books-showcase')


//--------- EVENT LISTENERS ---------

contentPage.addEventListener('click', function(event){
  
    const targetClicked = event.target

    switch (targetClicked){

        case buttonShowInfo:

            popUpManager.generatePopUp("info","");

            break;
        
        case popUpWindowCloseButton:

            popUpManager.closePopUp()

            break;

        case advancedSearchButton:

            advancedSearchFieldsContainer.classList.contains('active') ? advancedSearchFieldsContainer.classList.remove('active') : advancedSearchFieldsContainer.classList.add('active')
            
            break; 
            
        case genreToSearchInput:
            
            advancedSearchFieldsContainer.classList.remove('active')

            advancedSearchTitleInput.value=""

            advancedSearchAuthorInput.value=""

            break;
        
        case advancedSearchAuthorInput:
    
            advancedSearchTitleInput.value=""
    
            genreToSearchInput.value=""
    
            break;
 
        case advancedSearchTitleInput:
                
            advancedSearchAuthorInput.value=""
        
            genreToSearchInput.value=""
        
            break;
                
        
        case searchButton:

            let typeOfSearch = advancedSearchFieldsContainer.classList.contains('active') ? (advancedSearchAuthorInput.value === "" ? typeOfSearch="title" : typeOfSearch="author") : typeOfSearch = "genre"
            
            switch(typeOfSearch)
            {
                case "genre":

                    if(genreToSearchInput.value===""){

                        alert("Wait! You haven't entered anything to search the archive.\nFill in one of the fields to perform a search."); 

                    }

                    else{

                        blankShowcase.innerHTML='<h2>Search results for the genre: '+genreToSearchInput.value+'<h2>'

                        externalCalls.findBookByGenre(genreToSearchInput.value.toLowerCase())
        
                        genreToSearchInput.value=""
    
                    }

                    break;

                case "title":

                    if(advancedSearchTitleInput.value===""){

                        alert("Wait! You haven't entered anything to search the archive.\nFill in one of the fields to perform a search."); 

                    }

                    else{

                        blankShowcase.innerHTML='<h2>Search results for the title: '+advancedSearchTitleInput.value+'<h2>'

                        externalCalls.findBookByTitle(advancedSearchTitleInput.value)
    
                        advancedSearchTitleInput.value=""
                    }

                    break; 
                
                case "author":

                    if(advancedSearchAuthorInput.value===""){

                        alert("Wait! You haven't entered anything to search the archive.\nFill in one of the fields to perform a search."); 

                    }

                    else{

                        blankShowcase.innerHTML='<h2>Search result for the author: '+advancedSearchAuthorInput.value+'<h2>'

                        externalCalls.findAuthorKey(advancedSearchAuthorInput.value)
    
                        advancedSearchAuthorInput.value=""

                    }

                    break; 

                default:

                    alert("Wait! You haven't entered anything to search the archive.\nFill in one of the fields to perform a search.");

                break;
            }

            break;
        }
    }
)
