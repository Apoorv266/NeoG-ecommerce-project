export const initialState = {
    products: [],
    categories: [],
    wishlist: []
}


export const reducerFunc = (state, action) => {
    switch (action.type) {
        case "INITIAL_PRODUCT":
            return { ...state, products: action.payload };
        case "INITIAL_CATEGORY":
            return { ...state, categories: action.payload };
        case "INITIAL_WISHLIST":
            return { ...state, wishlist: action.payload };
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: [...action.payload] };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlist: action.payload }
        default:
            return state
    }
}

