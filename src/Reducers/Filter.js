export const initialFilterState = {
    searchTxt: "",
    priceRadio: "",
    categoryCheckbox: [],
    filterRating: 5
}

export const FilterFunc = (state, action) => {
    switch (action.type) {
        case "ADD_INPUT_FIELD":
            return { ...state, searchTxt: action.payload }
        case "ADD_CATEGORY_FIELD":
            return { ...state, categoryCheckbox: state.categoryCheckbox.includes(action.payload) ? state.categoryCheckbox.filter(item => item !== action.payload) : [...state.categoryCheckbox, action.payload] }
        case "ADD_PRICE_RADIO":
            return { ...state, priceRadio: action.payload }
        case "RATING_RANGE":
            return { ...state, filterRating: action.payload }
        case "CLEAR_FILTER":
            return {
                searchTxt: "",
                priceRadio: "",
                categoryCheckbox: [],
                filterRating: 5
            }
        default:
            return state
    }
}

