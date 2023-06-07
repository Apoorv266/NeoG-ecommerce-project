import React, { createContext, useContext, useEffect } from 'react'
import axios from 'axios'
import { productContext } from './ProductContext';
import { ToastError, ToastSuccess } from '../Components/Toast';
import { AuthContext } from './Auth';

export const addressContext = createContext()
const storageToken = JSON.parse(localStorage.getItem("token"));

const AddressContextFunc = ({ children }) => {
    const {token} = useContext(AuthContext)
    const { dispatch } = useContext(productContext)


    const addressFunc = async () => {

            try {
                // get initial address
                const response = await axios.get("/api/user/addresses", {
                    headers: { authorization: token },
                });
                const {
                    status: addressStatus,
                    data: { address },
                } = response;
                if (addressStatus === 200) {
                    dispatch({
                        type: "INITIAL_ADDRESS",
                        payload: address,
                    })
                }
            } catch (error) {
                console.log( error)
            }
    }


    const deleteAddressFunc = async (addressId) => {
        try {
            // delete address
            const response = await axios.delete(`/api/user/address/${addressId}`, {
                headers: { authorization: token },
            });
            const {
                status: addressStatus,
                data: { address },
            } = response;
            if (addressStatus === 200) {
                dispatch({
                    type: "DELETE_ADDRESS",
                    payload: address,
                })
                ToastSuccess ("Address deleted successfully !")
            }
        } catch (error) {
            ToastError("Some error occured !")
        }
    }

    const addAddress = async (addressData) => {
        try {
            const response = await axios.post(
                "/api/user/address",
                {
                    address: addressData,
                },
                { headers: { authorization: token } }
            );
            const {
                status,
                data: { address },
            } = response;
            if (status === 201) {
                dispatch({ type: "ADD_NEW_ADDRESS", payload: address });
                ToastSuccess ("Address added successfully !")
            }
        } catch (error) {
            console.log(error)
            ToastError("Some error occured !")
        }
    }


    const editAddress = async (addressData, addressId) => {
        try {
            const response = await axios.post(
                `/api/user/address/${addressId}`,
                { address: addressData },
                { headers: { authorization: token  } }
            );
            
            const {
                status,
                data: { address },
              } = response;
              if (status === 201) {
                dispatch({ type: "EDIT_ADDRESS", payload: address });
                ToastSuccess ("Address updated successfully !")
              }
        } catch (error) {
            ToastError("Some error occured !")
        }
        
    }


    useEffect(() => {
        if (token) {
            addressFunc();
        }
      }, [token]);

    return (
        <addressContext.Provider value={{ deleteAddressFunc, addAddress ,editAddress, addressFunc}}>{children}</addressContext.Provider>
    )
}

export default AddressContextFunc