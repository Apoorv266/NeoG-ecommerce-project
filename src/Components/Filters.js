import React from 'react'
import { categoryData, ratingData } from '../Static-Datas/FilterData'
import "../Styles/Filters.css"

const Filters = () => {
    return (
        <div className='filter-main'>
            <div className='filter-header'>
                <h3>Filters</h3>
                <button>Clear all filters</button>
            </div>
            <div className='filter-child'>
            <h3>Category</h3>
            {categoryData.map((item, index) => {
                return <div key={index}><label><input type='checkbox' />{item}</label></div>
            })}
            
            <h3>Ratings</h3>
            {ratingData.map((item , index) => {
                return <div key={index}><label><input type='radio' name='ratings' />{item}</label></div>
            })}
            <h3>Sort By</h3>
            <div><label><input type='radio' name='ratings' />Price (low to high)</label></div>
            <div><label><input type='radio' name='ratings' />Price (high to low)</label></div>
            <div><label><input type='radio' name='ratings' />Price (high to low)</label></div>
            </div>

        </div>
    )
}

export default Filters