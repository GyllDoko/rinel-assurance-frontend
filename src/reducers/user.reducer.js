const initialState = {}

export default function userReducer(state= initialState, action){
    let nextState
    switch (action.type) {
        case "GET_USERS":
            nextState = action.value
            return nextState
    
        default:
            return state;
    }
}