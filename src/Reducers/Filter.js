export const initialFilterState = {
    searchTxt: "",
    priceRadio: "",
    categoryCheckbox: []
}

export const FilterFunc = (state, action) => {
    switch (action.type) {
        case "ADD_INPUT_FIELD":
            return { ...state, searchTxt: action.payload }
        case "ADD_CATEGORY_FIELD":
            return { ...state, categoryCheckbox: state.categoryCheckbox.includes(action.payload) ? state.categoryCheckbox.filter(item => item !== action.payload) : [...state.categoryCheckbox, action.payload] }
            case "ADD_PRICE_RADIO":
                return { ...state, priceRadio: action.payload }
        default:
            return state
    }
}

