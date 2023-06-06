import React, { createContext, useContext } from 'react'
import { productContext } from './ProductContext';
import axios from 'axios';
import { useEffect } from 'react';
import { ToastError, ToastSuccess } from '../Components/Toast';

export const cartContext = createContext()
const CartContextFunc = ({ children }) => {
    const { dispatch, state } = useContext(productContext)
    const storageToken = JSON.parse(localStorage.getItem("token"));


    const getCartFunc = async () => {
        if (storageToken?.token) {
            try {
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
                ToastError("Some error occured !")
            }
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
            } else {
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

    const isInCart = (id) => {
        return state.cart.find(item => item._id === id)
    }


    const cartPriceObj = state.cart.reduce((acc, curr) => {

        // total price before discount
        const costPrice = (curr.price * curr.qty)
        // total price after discount
        const sellPrice = (curr.discount_price * curr.qty)
        //  total discount
        const totalDiscount = costPrice - sellPrice
    
        return { totalPrice: acc.totalPrice += costPrice, totalDiscount: acc.totalDiscount += totalDiscount, totalAmount: acc.totalAmount += sellPrice }
      }, { totalPrice: 0, totalDiscount: 0, totalAmount: 0 })

    useEffect(() => {
        getCartFunc()
    }, [])
    return (
        <cartContext.Provider value={{ addtoCart, isInCart, removeFromCart, updateCartFunc, cartPriceObj}}>{children}</cartContext.Provider>
    )
}

export default CartContextFunc