//Si può migliorare questa gestione eventi

//Generalize with Pop Up Generator

//Show Info

const overlayBackground = document.querySelector('#overlay')

export function openInfoWindowPopUp(infoWindowPopUp)
{
    infoWindowPopUp.classList.add('active')
    overlayBackground.classList.add('active')
}

export function closeInfoWindowPopUp(infoWindowPopUp)
{
    infoWindowPopUp.classList.remove('active')
    overlayBackground.classList.remove('active')
}

export function openDetailsWindowPopuUp(detailsInfoWindowPopUp)
{
    detailsInfoWindowPopUp.classList.add('active')
    detailsInfoWindowPopUp.innerText= Book.details.toString()
    overlayBackground.classList.add('active')
}

export function closeDetailsWindowPopUp(detailsInfoWindowPopUp)
{
    detailsInfoWindowPopUp.classList.remove('active')
    overlayBackground.classList.remove('active')
}



