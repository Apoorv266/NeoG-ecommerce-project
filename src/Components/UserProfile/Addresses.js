import React, { useContext } from 'react'
import { productContext } from '../../Contexts/ProductContext'
import { addressContext } from '../../Contexts/AddressContext'

const Addresses = ({editFunc}) => {
    const { state } = useContext(productContext)
    const { deleteAddressFunc } = useContext(addressContext)
    return (
        <>
            {state.address.map((item) => {
                return (
                    <div className='user-address-details' key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.address}</p>
                        <p><strong>Phone no. -</strong>{item.phone}</p>
                        <div className='address-utils-btn'>
                            <button className='edit-address-btn' onClick={()=>editFunc(item.name, item.address, item.phone, item._id)}>Edit</button>
                            <button className='dlt-address-btn' onClick={() => deleteAddressFunc(item._id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Addresses