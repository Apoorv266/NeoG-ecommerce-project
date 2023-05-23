export const initialState = {
    products: [],
    categories: []
}


export const reducerFunc = ( state, action ) => {
    switch (action.type) {
        case "INITIAL_PRODUCT":
            return {...state,products: action.payload};
            case "INITIAL_CATEGORY":
                return {...state,categories: action.payload};
        default:
            return state
    }
}

