import React, { useContext } from 'react'
import { productContext } from '../../Contexts/ProductContext'

const OrderDetails = () => {
  const { state } = useContext(productContext)
  console.log(state.orderDetails)
  return (
    <div className='order-Details-header'>{
      state?.orderDetails.map((item) => {
        return (
          <div key={item.id} style={{width:"100%"}}>
            <h3>Shopping Total : ₹ {item?.amount}</h3>
            <p>Order placed : {item?.date.getUTCMonth()}</p>
            <p>Billing name : {item?.address.name}</p>
            <p>Order address : {item?.address.address}</p>

            <ol>
              {item.productsList.map((item) => {
                return (
                  <li key={item._id}>{item.title}</li>
                )
              })}
            </ol>
            <hr />
          </div>
        )
      })
    }
    </div>
  )
}

export default OrderDetails