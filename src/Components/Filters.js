import React, { useContext } from 'react'
import { ratingData } from '../Static-Datas/FilterData'
import "../Styles/Filters.css"
import { productContext } from '../Contexts/ProductContext'
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Filters = () => {
    const {state, filterDispatch, filterState} = useContext(productContext)
    return (
        <div className='filter-main'>
            <div className='filter-header'>
                <h3>Filters</h3>
                <button>Clear all filters</button>
            </div>
            <div className='filter-child'>

                <h3>Filter by ratings :-</h3>
                <span>
                1 <StarRoundedIcon />
              </span>
              <span>
                5 <StarRoundedIcon />
              </span>
                <input
              type="range"
              min="1"
              max="5"
              step="1"
              list="steplist"
           
            />
            <datalist id="steplist">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </datalist>



            <h3>Filter by Categories :-</h3>
            {state.categories.map((item) => {
                return <div key={item._id}><label><input type='checkbox' checked={filterState.categoryCheckbox.includes(item.categoryName)} onClick={()=>filterDispatch({type: "ADD_CATEGORY_FIELD", payload : item.categoryName})}/>{item.categoryName}</label></div>
            })}
            
            
            <h3>Sort By Price :-</h3>
            <div><label><input type='radio' name='ratings' onClick={()=>filterDispatch({type: "ADD_PRICE_RADIO", payload : "lowtohigh"})}/>Price (low to high)</label></div>
            <div><label><input type='radio' name='ratings'onClick={()=>filterDispatch({type: "ADD_PRICE_RADIO", payload : "hightolow"})} />Price (high to low)</label></div>
            </div>

        </div>
    )
}

export default Filters