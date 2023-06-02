import React from 'react'
import "../../Styles/AddressForm.css"
const AddressForm = ({ setaddressForm, addressForm, addNewAddress, saveBtn }) => {

  return (
    <>
      <div className='address-form-main'>
        <h3>Enter name:</h3>
        <input type='text' value={addressForm.name} onChange={(e) => setaddressForm({ ...addressForm, name: e.target.value })} />
        <h3>Enter complete address:</h3>
        <input type='text' value={addressForm.address} onChange={(e) => setaddressForm({ ...addressForm, address: e.target.value })} />
        <h3>Enter phone no.</h3>
        <input type='number' value={addressForm.phone} onChange={(e) => setaddressForm({ ...addressForm, phone: e.target.value })} />
        <div>
          <button className='add-new-address-btn' onClick={addNewAddress}>{saveBtn ? "Save address" : "Add address"}</button>
        </div>
      </div>
    </>
  )
}

export default AddressForm