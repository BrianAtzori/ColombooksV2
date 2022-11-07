//--------- ELEMENTS ---------

const overlayBackground = document.querySelector('#overlay')

const popUpWindow = document.querySelector('.popup-window')

const popUpWindowTitle = document.querySelector('.popup-window-title')

const popUpWindowBody = document.querySelector('.popup-window-body')


//--------- FUNCTIONS ---------

export function generatePopUp(popUpType,data)
{
    overlayBackground.classList.add('active')

    switch(popUpType){

        case 'info':
            popUpWindow.classList.add('active')
            break;

        case 'details':

            popUpWindowTitle.innerHTML = 'Description:'

            popUpWindowBody.innerHTML = data

            popUpWindow.classList.add('active')
            break;
    }
}

export function closePopUp()
{
    overlayBackground.classList.remove('active')
    popUpWindow.classList.remove('active')
}