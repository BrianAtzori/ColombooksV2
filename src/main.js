import './styles/general-style.scss';

import './styles/header-style.scss';

import './styles/search-section-style.scss';

import './styles/books-showcase-style.scss';

import * as externalCalls from './scripts/external-calls.js'

import * as popUpManager from './scripts/pop-ups.js'

// ----------------------- Classes.js ------------------------------


//------------------------- Main.js -------------------------------

//Info Window Elements

const buttonShowInfo = document.querySelector('.icon-info')

const infoWindowPopUp = document.querySelector('.info-window')

const infoWindowsCloseButton= document.querySelector('.info-window-close-button')

//Search Elements

const searchButton = document.querySelector('.search-button')

const genreToSearchInput = document.querySelector('.genre-search-bar')

//Advanced Search Elements

const advancedSearchButton = document.querySelector('.advanced-search-button')

const advancedSearchFieldsContainer =document.querySelector('.advanced-search-input-container')

const advancedSearchAuthorInput = document.querySelector('.author-search-bar')

const advancedSearchTitleInput = document.querySelector('.title-search-bar')

//Showcase Elements

const detailPopUpCloseButton= document.querySelector('.info-window-close-button')

// Loading "Animation"?

// ------------------------ External Calls.js ---------------------------------



// --------------------------- Pop Ups.js -------------------------------

buttonShowInfo.addEventListener('click', ()=>{
    popUpManager.openInfoWindowPopUp(infoWindowPopUp)
});

infoWindowsCloseButton.addEventListener('click', ()=>{
    popUpManager.closeInfoWindowPopUp(infoWindowPopUp)
});

detailPopUpCloseButton.addEventListener('click', () =>{
    popUpManager.closeDetailsWindowPopUp(infoWindowPopUp)
})

// ---------------------- Search Section.js -------------------------------

advancedSearchButton.addEventListener('click', ()=>{
    advancedSearchFieldsContainer.classList.add('active') 
})

searchButton.addEventListener('click', () => {
    
    if(advancedSearchFieldsContainer.classList.contains('active')){

        if(advancedSearchTitleInput.value==""){
            externalCalls.requestToApi2(advancedSearchAuthorInput.value)
        }
        else if(advancedSearchAuthorInput.value=="") {
            externalCalls.requestToApi4(advancedSearchTitleInput.value)
        }
    }
    else{
        externalCalls.requestToApi(genreToSearchInput.value)
        //Aggiungiamo un H2 con quello cercato?
        genreToSearchInput.value=""
    }  
});

//-------------------------------- Showcase Generator.js ---------------------------------



//--------------------------------- Showcase Manager.js -------------------------------
