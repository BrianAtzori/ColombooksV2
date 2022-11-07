import * as popUpManager from './pop-ups.js'

import * as externalCallsManager from './external-calls'

export function showDetails(bookKey)
{
    externalCallsManager.fetchBookDescription(bookKey)
}