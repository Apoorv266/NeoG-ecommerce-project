import React, { createContext, useContext, useEffect } from 'react'
import axios from 'axios'
import { productContext } from './ProductContext';
const storageToken = JSON.parse(localStorage.getItem("token"));

export const addressContext = createContext()
const AddressContextFunc = ({ children }) => {
    const { dispatch } = useContext(productContext)


    const addressFunc = async () => {
        try {
            // get initial address
            const response = await axios.get("/api/user/addresses", {
                headers: { authorization: storageToken?.token },
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
            console.log(error)
        }
    }


    const deleteAddressFunc = async (addressId) => {
        try {
            // delete address
            const response = await axios.delete(`/api/user/address/${addressId}`, {
                headers: { authorization: storageToken?.token },
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
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addAddress = async (addressData) => {
        try {
            const response = await axios.post(
                "/api/user/address",
                {
                    address: addressData,
                },
                { headers: { authorization: storageToken?.token } }
            );
            const {
                status,
                data: { address },
            } = response;
            if (status === 201) {
                dispatch({ type: "ADD_NEW_ADDRESS", payload: address });
            }
        } catch (error) {
            console.log(error)
        }
    }


    const editAddress = async (addressData, addressId) => {
        try {
            const response = await axios.post(
                `/api/user/address/${addressId}`,
                { address: addressData },
                { headers: { authorization: storageToken?.token  } }
            );
            
            const {
                status,
                data: { address },
              } = response;
              if (status === 201) {
                dispatch({ type: "EDIT_ADDRESS", payload: address });
                console.log(address)
              }
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        addressFunc()
    }, [])

    return (
        <addressContext.Provider value={{ deleteAddressFunc, addAddress ,editAddress}}>{children}</addressContext.Provider>
    )
}

export default AddressContextFunc