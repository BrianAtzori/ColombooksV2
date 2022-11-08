//--------- IMPORTS ---------

import * as externalCallsManager from './external-calls'


//--------- FUNCTIONS ---------

//Use the given button attribute to fetch the book description 

export function showDetails(bookKey)
{
    externalCallsManager.fetchBookDescription(bookKey)
}