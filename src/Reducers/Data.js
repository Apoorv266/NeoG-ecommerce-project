export const initialState = {
    products: [],
    categories: [],
    wishlist: [],
    cart: [],
    address: []
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
            return { ...state, wishlist: action.payload };
        case "INITIAL_CART":
            return { ...state, cart: action.payload };
        case "ADD_CART":
            return { ...state, cart: action.payload };
        case "REMOVE_FROM_CART":
            return { ...state, cart: action.payload };
        case "UPDATE_CART":
            return { ...state, cart: action.payload };
        case "INITIAL_ADDRESS":
            return { ...state, address: action.payload };
        case "DELETE_ADDRESS":
            return { ...state, address: action.payload };
        case "ADD_NEW_ADDRESS":
            return { ...state, address: action.payload };
        case "EDIT_ADDRESS":
            return { ...state, address: action.payload };
        default:
            return state
    }
}

