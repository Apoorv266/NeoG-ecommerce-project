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
        _id: "",
        name: "",
        address: "",
        phone: ""
    })
    const [saveBtn, setsaveBtn] = useState(false)


    function openModal() {
        setsaveBtn(false)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const editFunc = (name, address, phone, addressId) => {
        setsaveBtn(true)
        setaddressForm({
            _id:addressId,
            name: name,
            address: address,
            phone: phone
        })
        setIsOpen(true);
    }



    const addNewAddress = () => {
        const isAddressPresent = state.address.find((item) => item._id === addressForm._id)
        if (isAddressPresent) {
            editAddress(addressForm,isAddressPresent._id )
        }else{
            addAddress({ ...addressForm, _id: uuid() })
        }
        setaddressForm({_id : "",name: "",
        address: "",
        phone: ""})
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