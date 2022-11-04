//To Do:

//Details Button
//Loading "Animation"
//Aggiungiamo un H2 con quello cercato
//Migliore gestione dei campi ricerca / Gestione ricerca avanzata
//Error if blank/null
//TryCatch su richieste
//Lodash for path
//Pulizia Import/Export
//Comments on functions
//Gestire risposta vuota se non trovo libri

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

//Book Showcase Elements

const detailPopUpCloseButton= document.querySelector('.info-window-close-button')


//--------- EVENT LISTENER ---------

contentPage.addEventListener('click', function(event){
  
    const targetClicked = event.target

    switch (targetClicked){

        case buttonShowInfo:
            popUpManager.generatePopUp("info");
            break;
        
        case popUpWindowCloseButton:
            popUpManager.closePopUp()
            break;

        case advancedSearchButton:
            advancedSearchFieldsContainer.classList.add('active')
            break;  
        
        case searchButton:

            if(advancedSearchFieldsContainer.classList.contains('active')){

                if(advancedSearchTitleInput.value==""){
                    externalCalls.requestToApi2(advancedSearchAuthorInput.value)
                }
                else if(advancedSearchAuthorInput.value=="") {
                    externalCalls.requestToApi4(advancedSearchTitleInput.value)
                }
            }
            else{
                externalCalls.findBookByGenre(genreToSearchInput.value)
                genreToSearchInput.value=""
            } 
            break;
    }

  })
