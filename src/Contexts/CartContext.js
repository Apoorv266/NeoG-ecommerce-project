import React, { createContext, useContext } from 'react'
import { productContext } from './ProductContext';
import axios from 'axios';
import { useEffect } from 'react';
import { ToastError, ToastSuccess } from '../Components/Toast';
import { AuthContext } from './Auth';

export const cartContext = createContext()
const CartContextFunc = ({ children }) => {
    const { dispatch, state } = useContext(productContext)
    const {token} = useContext(AuthContext)
    const isDiscountCodePrst = Object.keys(state.selectedCoupon).length > 0

    const getCartFunc = async () => {
            try {
                // to get initial cart items
                const { status: statusCode, data: { cart } } = await axios.get("/api/user/cart", {
                    headers: { authorization: token },
                });
    
                if (statusCode === 200) {
                    dispatch({
                        type: "INITIAL_CART",
                        payload: cart,
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
                    headers: { authorization: token},
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
            if (!token) {
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
                headers: { authorization: token },
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
                { headers: { authorization: token } }
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
        // coupon discount
        const couponDiscount = (state?.selectedCoupon.discount/100)*sellPrice
    
        return { totalPrice: acc.totalPrice += costPrice, totalDiscount: acc.totalDiscount += totalDiscount, totalAmount:isDiscountCodePrst ? (acc.totalAmount += sellPrice) -couponDiscount : acc.totalAmount += sellPrice , totalQuantity : acc.totalQuantity+= curr.qty}
      }, { totalPrice: 0, totalDiscount: 0, totalAmount: 0, totalQuantity:0 })

    
      useEffect(() => {
        if (token) {
            getCartFunc();
        }
      }, [token]);
    return (
        <cartContext.Provider value={{ addtoCart, isInCart, removeFromCart, updateCartFunc, cartPriceObj, isDiscountCodePrst}}>{children}</cartContext.Provider>
    )
}

export default CartContextFunc