import React, { createContext, useEffect, useReducer, useState } from 'react'
import { GetAllProducts } from '../Fetch-services/FetchServices'
import { initialState, reducerFunc } from '../Reducers/Data'
import axios from 'axios'

export const productContext = createContext()
const ProductContextFunc = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  const [loader, setloader] = useState(false)
  const storageToken = JSON.parse(localStorage.getItem("token"));;

  const fetchFunc = async () => {
    try {

      const { data: products } = await axios.get("/api/products");
      dispatch({
        type: "INITIAL_PRODUCT",
        payload: products.products,
      });




      const { data: category } = await axios.get("/api/categories");
      dispatch({
        type: "INITIAL_CATEGORY",
        payload: category.categories,
      });




      const {status, data: {wishlist}} = await axios.get("/api/user/wishlist", {
        headers: { authorization: storageToken?.token },
      });
      if(status === 200){
        console.log("wishlist", wishlist)
        dispatch({
          type: "INITIAL_WISHLIST",
          payload: wishlist,
        })
      }
    } catch (error) {
      console.group(error)
    } finally {
      setloader(false)
    }
  }


  const addToWishlist = async (product) =>{
    try {
      const {status, data: {wishlist}} = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: storageToken?.token } }
      );
  
      if(status === 201){
        dispatch({
          type: "INITIAL_WISHLIST",
          payload: wishlist,
        })
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    setloader(true)
    setTimeout(() => {
      fetchFunc()
    }, 1000);
  }, [])


  const isInWishlist = (id) =>{
    return state.wishlist.find(item => item._id === id)
  }
   console.log("wishlist", state)
  return (
    <productContext.Provider value={{ state, loader, setloader,addToWishlist, isInWishlist }}>{children}</productContext.Provider>
  )
}

export default ProductContextFunc