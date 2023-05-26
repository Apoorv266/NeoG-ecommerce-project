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



      // to get initial wishlist
      const { status, data: { wishlist } } = await axios.get("/api/user/wishlist", {
        headers: { authorization: storageToken?.token },
      });
      if (status === 200) {
        dispatch({
          type: "INITIAL_WISHLIST",
          payload: wishlist,
        })
      }

      
      // to get initial cart items
      const { status : statusCode, data: { cart } } = await axios.get("/api/user/cart", {
        headers: { authorization: storageToken?.token },
      });
      console.log("cart",cart, statusCode)
      if (status === 200) {
        dispatch({
          type: "INITIAL_CART",
          payload: cart,
        })
      }
    } catch (error) {
      console.group(error)
    } finally {
      setloader(false)
    }
  }


  const addToWishlist = async (product) => {
    try {
      const { status, data: { wishlist } } = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: storageToken?.token } }
      );

      if (status === 201) {
        dispatch({
          type: "INITIAL_WISHLIST",
          payload: wishlist,
        })
      }
    } catch (error) {
      console.log(error)
    }

  }

  const removeFromWishlist = async (id) => {
    try {
      const { status, data: { wishlist } } = await axios.delete(
        `/api/user/wishlist/${id}`,
        { headers: { authorization: storageToken?.token } }
      );
      if (status === 200) {
        console.log(wishlist)
        dispatch({
          type: "REMOVE_FROM_WISHLIST",
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


  const isInWishlist = (id) => {
    return state.wishlist.find(item => item._id === id)
  }

  return (
    <productContext.Provider value={{ state, loader, setloader, addToWishlist, isInWishlist, removeFromWishlist }}>{children}</productContext.Provider>
  )
}

export default ProductContextFunc