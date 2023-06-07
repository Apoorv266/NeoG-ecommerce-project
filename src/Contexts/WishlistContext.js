import axios from 'axios';
import React, { createContext } from 'react'
import { useContext } from 'react';
import { productContext } from './ProductContext';
import { ToastError, ToastSuccess } from '../Components/Toast';
import { useEffect } from 'react';
import { AuthContext } from './Auth';

export const wishlistContext = createContext()

const WishlistContextFunc = ({ children }) => {
    const { dispatch, state } = useContext(productContext)
    const storageToken = JSON.parse(localStorage.getItem("token"));
    const { token } = useContext(AuthContext)

    const getWishlistFunc = async () => {
        try {
            // to get initial wishlist
            const { status, data: { wishlist } } = await axios.get("/api/user/wishlist", {
                headers: { authorization: token },
            });
            if (status === 200) {
                dispatch({
                    type: "INITIAL_WISHLIST",
                    payload: wishlist,
                })
            }
        } catch (error) {
            console.log( error)
        }
    }



    // add to wishlist
    const addToWishlist = async (product) => {
        try {
            const { status, data: { wishlist } } = await axios.post(
                "/api/user/wishlist",
                { product },
                { headers: { authorization: token } }
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
            } else {
                ToastError("Some error occured !")
            }
        }
    }

    // remove from wishlist function
    const removeFromWishlist = async (id) => {
        try {
            const { status, data: { wishlist } } = await axios.delete(
                `/api/user/wishlist/${id}`,
                { headers: { authorization: token } }
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

    const isInWishlist = (id) => {
        return state.wishlist.find(item => item._id === id)
    }

    useEffect(() => {
        if (token) {
            getWishlistFunc();
        }
    }, [token]);

    return (
        <wishlistContext.Provider value={{ addToWishlist, removeFromWishlist, isInWishlist }}>{children}</wishlistContext.Provider>
    )
}

export default WishlistContextFunc