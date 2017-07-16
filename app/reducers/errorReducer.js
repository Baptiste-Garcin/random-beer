import * as actionList from '../actions/actionList'

export function error (state = null, action) {
    switch (action.type) {
        case actionList.NETWORK_ERROR:
            return {errorMessage: action.payload.message,
                    code: 1}
        default:
            return null
    }
}
