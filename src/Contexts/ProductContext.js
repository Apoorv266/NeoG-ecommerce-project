import React, { createContext, useEffect, useReducer, useState } from 'react'
import { GetAllProducts } from '../Fetch-services/FetchServices'
import { initialState, reducerFunc } from '../Reducers/Data'
import axios from 'axios'
import { FilterFunc, initialFilterState } from '../Reducers/Filter'
import 'react-toastify/dist/ReactToastify.css';
import { ToastError, ToastSuccess } from '../Components/Toast'
import { useContext } from 'react'
import { AuthContext } from './Auth'

export const productContext = createContext()
const ProductContextFunc = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  const [filterState, filterDispatch] = useReducer(FilterFunc, initialFilterState)
  const storageToken = JSON.parse(localStorage.getItem("token"));
  const {loader, setloader} = useContext(AuthContext)

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
      // ToastError("Some error occured !")
      console.log("2", error)
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
        ToastSuccess("Succesfully added to wishlist !")
      }
    } catch (error) {
      if (!storageToken) {
        ToastError("Please login first !")
      }else{
        ToastError("Some error occured !")
      }
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
        ToastSuccess("Succesfully removed from wishlist !")
      }
    } catch (error) {
        ToastError("Some error occured !")
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
        ToastSuccess("Succesfully added to cart !")
      }
    } catch (error) {
      if (!storageToken) {
        ToastError("Please login first !")
      }else{
        ToastError("Some error occured !")
      }
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
      ToastSuccess("Succesfully removed from cart !")
    } catch (error) {
      ToastError("Some error occured !")
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
      ToastError("Some error occured !")
    }
  }

  useEffect(() => {
    setloader(true)
    setTimeout(() => {
      fetchFunc()
    }, 1000);
  }, [])


  // UTILITY FUNCTIONS
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


  // CART CALCULATIONS
  const cartPriceObj = state.cart.reduce((acc, curr) => {

    // total price before discount
    const costPrice = (curr.price * curr.qty)
    // total price after discount
    const sellPrice = (curr.discount_price * curr.qty)
    //  total discount
    const totalDiscount = costPrice - sellPrice

    return { totalPrice: acc.totalPrice += costPrice, totalDiscount: acc.totalDiscount += totalDiscount, totalAmount: acc.totalAmount += sellPrice }
  }, { totalPrice: 0, totalDiscount: 0, totalAmount: 0 })


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

  return (
    <productContext.Provider value={{ state, addToWishlist, isInWishlist, removeFromWishlist, addtoCart, isInCart, removeFromCart, updateCartFunc, calPercentage, cartPriceObj, dispatch, filterDispatch, filterState, filterFunction }}>{children}</productContext.Provider>
  )
}

export default ProductContextFunc