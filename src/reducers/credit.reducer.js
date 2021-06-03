

export default function creditReducer(state = 0, action) {
    let nextState
    switch (action.type) {
        case "GET_SOLDE":
            nextState = action.value
            return nextState 
        case "UPDATE_SOLDE":
            nextState = state - action.value
            return nextState || state
        default:
            return state
    }

}