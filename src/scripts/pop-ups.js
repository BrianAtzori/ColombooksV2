//--------- ELEMENTS ---------

const overlayBackground = document.querySelector('#overlay')

const popUpWindow = document.querySelector('.popup-window')


//--------- FUNCTIONS ---------

export function generatePopUp(popUpType,data)
{
    overlayBackground.classList.add('active')

    switch(popUpType){

        case 'info':
            popUpWindow.classList.add('active')
            break;

        case 'details':
            popUpWindow.classList.add('active')
            popUpWindow.innerText= data
            break;
    }
}

export function closePopUp()
{
    overlayBackground.classList.remove('active')
    popUpWindow.classList.remove('active')
}