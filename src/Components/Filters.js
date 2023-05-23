import React, { useContext } from 'react'
import { categoryData, ratingData } from '../Static-Datas/FilterData'
import "../Styles/Filters.css"
import { productContext } from '../Contexts/ProductContext'

const Filters = () => {
    const {state} = useContext(productContext)
    return (
        <div className='filter-main'>
            <div className='filter-header'>
                <h3>Filters</h3>
                <button>Clear all filters</button>
            </div>
            <div className='filter-child'>
            <h3>Category</h3>
            {state.categories.map((item) => {
                return <div key={item._id}><label><input type='checkbox' />{item.categoryName}</label></div>
            })}
            
            <h3>Ratings</h3>
            {ratingData.map((item , index) => {
                return <div key={index}><label><input type='radio' name='ratings' />{item}</label></div>
            })}
            <h3>Sort By</h3>
            <div><label><input type='radio' name='ratings' />Price (low to high)</label></div>
            <div><label><input type='radio' name='ratings' />Price (high to low)</label></div>
            </div>

        </div>
    )
}

export default Filters