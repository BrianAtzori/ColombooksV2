//To Do:
//Migliore gestione dei campi ricerca / Gestione ricerca avanzata
//Error if blank/null
//TryCatch su richieste
//Lodash for path
//Gestire risposta vuota se non trovo libri
//Gestire lettere maiuscole nella ricerca
//Pulizia PopUp
//Ordinare Libri
//Gestire descrizione Undefined
//Gestire copertina undefined
//Svuota dopo ricerca
//fare la guida
//migliorare grafica popup

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
            advancedSearchFieldsContainer.classList.add('active')
            break;  
        
        case searchButton:

            //Gestire meglio sia front-end che codice

            if(advancedSearchFieldsContainer.classList.contains('active')){

                if(advancedSearchTitleInput.value==""){

                    blankShowcase.innerHTML='<h2>Search result for the author: '+advancedSearchAuthorInput.value+'<h2>'

                    externalCalls.findAuthorKey(advancedSearchAuthorInput.value)

                    advancedSearchAuthorInput.value=""

                }
                else if(advancedSearchAuthorInput.value=="") {

                    blankShowcase.innerHTML='<h2>Search results for the title: '+advancedSearchTitleInput.value+'<h2>'

                    externalCalls.findBookByTitle(advancedSearchTitleInput.value)

                    advancedSearchTitleInput.value=""

                }
            }
            else{

                blankShowcase.innerHTML='<h2>Search results for the genre: '+genreToSearchInput.value+'<h2>'

                externalCalls.findBookByGenre(genreToSearchInput.value)

                genreToSearchInput.value=""
            } 
            break;
    }

  })
