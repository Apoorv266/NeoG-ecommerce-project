import React, { useContext, useState } from 'react'
import AddressForm from './AddressForm';
import Addresses from './Addresses';
import { addressContext } from '../../Contexts/AddressContext';
import { v4 as uuid } from "uuid";
import { productContext } from '../../Contexts/ProductContext';
const UserAddress = () => {

    const {addAddress,editAddress } = useContext(addressContext)
    const {state} = useContext(productContext)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [addressForm, setaddressForm] = useState({
        name: "",
        address: "",
        number: ""
    })
    const [saveBtn, setsaveBtn] = useState(false)
    const [currentId, setcurrentId] = useState("second")

    function openModal() {
        setsaveBtn(false)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const editFunc = (name, address, phone, addressId) => {
        setcurrentId(addressId)
        setsaveBtn(true)
        setaddressForm({
            name: name,
            address: address,
            phone: phone
        })
        setIsOpen(true);
    }


    const addNewAddress = () => {
        const isAddressPresent = state.address.find((item) => item._id === currentId)
        if (isAddressPresent) {
            editAddress(addressForm,currentId )
        }else{
            addAddress({ ...addressForm, _id: uuid() })
        }
        setaddressForm({name: "",
        address: "",
        number: ""})
        setIsOpen(false);
    }
    return (
        <>
            <div className='user-address-wrapper'>
                {modalIsOpen ? <><button className='close-address-btn' onClick={closeModal}>Close</button>
                    <AddressForm addressForm={addressForm} setaddressForm={setaddressForm} addNewAddress={addNewAddress} saveBtn={saveBtn}/></> : <><button className='add-address-btn' onClick={openModal}>Add address</button> <Addresses editFunc={editFunc} /></>}
            </div>
        </>
    )
}

export default UserAddress