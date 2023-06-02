import React, { createContext, useEffect, useReducer, useState } from 'react'
import { GetAllProducts } from '../Fetch-services/FetchServices'
import { initialState, reducerFunc } from '../Reducers/Data'
import axios from 'axios'

export const productContext = createContext()
const ProductContextFunc = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  const [loader, setloader] = useState(false)
  const storageToken = JSON.parse(localStorage.getItem("token"));

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
      const { status: statusCode, data: { cart } } = await axios.get("/api/user/cart", {
        headers: { authorization: storageToken?.token },
      });

      if (statusCode === 200) {
        dispatch({
          type: "INITIAL_CART",
          payload: cart,
        })
      }


      
    } catch (error) {
      console.log("error",error)
    } finally {
      setloader(false)
    }
  }

  // add to wishlist
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

  // remove from wishlist function
  const removeFromWishlist = async (id) => {
    try {
      const { status, data: { wishlist } } = await axios.delete(
        `/api/user/wishlist/${id}`,
        { headers: { authorization: storageToken?.token } }
      );
      if (status === 200) {
        dispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: wishlist,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  // add to cart function
  const addtoCart = async (product) => {
    try {
      const { status, data: { cart } } = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: { authorization: storageToken?.token },
        }
      );
      if (status === 201) {
        dispatch({
          type: "ADD_CART",
          payload: cart,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  // remove from cart
  const removeFromCart = async (productId) => {
    try {
      const { status, data: { cart } } = await axios.delete(`api/user/cart/${productId}`, {
        headers: { authorization: storageToken?.token },
      });
      if (status === 200) {
        dispatch({ type: "REMOVE_FROM_CART", payload: cart })
      }
    } catch (error) {
      console.log(error)
    }

  }

  // update cart quantity Function
  const updateCartFunc = async (productId, type) => {

    try {
      const { status, data: { cart } } = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type } },
        { headers: { authorization: storageToken?.token } }
      );

      if (status === 200) {
        dispatch({ type: "UPDATE_CART", payload: cart })
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

  const isInCart = (id) => {
    return state.cart.find(item => item._id === id)
  }

  const calPercentage = (actualPrice, discountPrice) => {
    let discount = actualPrice - discountPrice
    const discountCent = (discount / actualPrice) * 100
    return discountCent.toFixed(0)
  }


  // CART LOGICS
  const cartPriceObj = state.cart.reduce((acc, curr) => {

    // total price before discount
    const costPrice = (curr.price * curr.qty)
    // total price after discount
    const sellPrice = (curr.discount_price * curr.qty)
    //  total discount
    const totalDiscount = costPrice - sellPrice

    return { totalPrice: acc.totalPrice += costPrice, totalDiscount: acc.totalDiscount += totalDiscount, totalAmount: acc.totalAmount += sellPrice }
  }, { totalPrice: 0, totalDiscount: 0, totalAmount: 0 })

  return (
    <productContext.Provider value={{ state, loader, setloader, addToWishlist, isInWishlist, removeFromWishlist, addtoCart, isInCart, removeFromCart, updateCartFunc, calPercentage, cartPriceObj,dispatch}}>{children}</productContext.Provider>
  )
}

export default ProductContextFunc