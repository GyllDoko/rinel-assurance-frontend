

const initialState = {user_accounts:[], solde:0}

export default function userReducer(state= initialState, action){
    let nextState
    switch (action.type) {
        case "GET_USERS":
            nextState = {
                ...state,
                ...action.value,
            user_accounts: [...action.value.user.accounts],
            solde: action.value.user
        }
            return nextState || state
        case "ADD_ACCOUNTS":
            nextState = {...state, 
                user_accounts:[...action.value.user.accounts ] }
            return nextState || state
       
        default:
            return state;
    }
}