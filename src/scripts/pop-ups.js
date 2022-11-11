//--------- ELEMENTS ---------

const overlayBackground = document.querySelector('#overlay')

const popUpWindow = document.querySelector('.popup-window')

const popUpWindowTitle = document.querySelector('.popup-window-title')

const popUpWindowBody = document.querySelector('.popup-window-body')


//--------- FUNCTIONS ---------

//Generate Popups based on the type of data to show

export function generatePopUp(popUpType,data)
{
    overlayBackground.classList.add('active')

    switch(popUpType){

        case 'info':
            popUpWindow.classList.add('active')
            break;

        case 'details':

            data = data === undefined ? "The book description is not available in the archive." : data

            popUpWindowTitle.innerHTML = 'Description:'

            popUpWindowBody.innerHTML = data 

            popUpWindow.classList.add('active')
            break;
    }
}

//Close the active popup

export function closePopUp()
{
    overlayBackground.classList.remove('active')
    popUpWindow.classList.remove('active')
}