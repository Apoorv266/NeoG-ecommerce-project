import React, { createContext, useEffect, useReducer, useState } from 'react'
import { GetAllProducts } from '../Fetch-services/FetchServices'
import { initialState, reducerFunc } from '../Reducers/Data'
import axios from 'axios'
import { FilterFunc, initialFilterState } from '../Reducers/Filter'
import 'react-toastify/dist/ReactToastify.css';
import { ToastError } from '../Components/Toast'
import { useContext } from 'react'
import { AuthContext } from './Auth'

export const productContext = createContext()
const ProductContextFunc = ({ children }) => {
  const storageAddress = JSON.parse(localStorage.getItem("addressData"))
  const [state, dispatch] = useReducer(reducerFunc,{...initialState, address: storageAddress})
  const [filterState, filterDispatch] = useReducer(FilterFunc, initialFilterState)
  const {setloader} = useContext(AuthContext)
  const [profileCard, setprofileCard] = useState(0)

  const fetchFunc = async () => {
    try {
      // to get initial products
      const { data: products } = await axios.get("/api/products");
      dispatch({
        type: "INITIAL_PRODUCT",
        payload: products.products,
      });


      // to get initial categories
      const { data: category } = await axios.get("/api/categories");
      dispatch({
        type: "INITIAL_CATEGORY",
        payload: category.categories,
      });

    } catch (error) {
      ToastError("Some error occured !")
    } finally {
      setloader(false)
    }
  }

  useEffect(() => {
    setloader(true)
    setTimeout(() => {
      fetchFunc()
    }, 1000);
  }, [])



  const calPercentage = (actualPrice, discountPrice) => {
    let discount = actualPrice - discountPrice
    const discountCent = (discount / actualPrice) * 100
    return discountCent.toFixed(0)
  }


  // FILTER FUNCTIONALITY
  const filterFunction = () => {
    const filterText = filterState.searchTxt ? state.products.filter((item) => item.title.toLowerCase().includes(filterState.searchTxt.toLowerCase())) : state.products

    const filterCategory = filterState.categoryCheckbox.length > 0 ? filterText.filter((item) => filterState.categoryCheckbox.includes(item.type)) : filterText

    const filterBrand = filterState.brandCheckbox.length > 0 ? filterCategory.filter((item) => filterState.brandCheckbox.includes(item.company)) : filterCategory

    const filterbyPrice = filterState.priceRadio === "" ? filterBrand : filterState.priceRadio === "lowtohigh" ? [...filterBrand].sort((a, b) => a.discount_price - b.discount_price) : [...filterBrand].sort((a, b) => b.discount_price - a.discount_price)

    const ratingFilter = filterbyPrice.filter((item) => item.starRating <= filterState.filterRating)

    return ratingFilter
  }

  useEffect(() => {
    filterFunction()
  }, [filterState])

  useEffect(() => {
    localStorage.setItem("addressData", JSON.stringify(state.address ));
  }, [state])
 
  console.log(state)
  return (
    <productContext.Provider value={{ state, calPercentage, dispatch, filterDispatch, filterState, filterFunction, profileCard, setprofileCard}}>{children}</productContext.Provider>
  )
}

export default ProductContextFunc