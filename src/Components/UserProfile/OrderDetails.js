import React, { useContext } from 'react'
import { productContext } from '../../Contexts/ProductContext'

const OrderDetails = () => {
  const { state } = useContext(productContext)

  const getDate = (date) =>{
    let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
return currentDate
  }
  return (
    <>
    {state?.orderDetails.length > 0 ? <div className='order-Details-header'>{
      state?.orderDetails.map((item) => {
        return (
          <div key={item.id} style={{ width: "100%" }}>
            <h3>Shopping Total : ₹ {item?.amount.toFixed(2)}</h3>
            <p>Order placed on: {getDate(item?.date)}</p>
            <p>Billing name : {item?.address.name}</p>
            <p>Order address : {item?.address.address}</p>

            <ol>
              {item.productsList.map((item) => {
                return (
                  <li key={item._id}>{item.title} - x{item.qty}</li>
                )
              })}
            </ol>
            <hr />
          </div>
        )
      })
    }
    </div> : <h3>No orders placed yet !</h3>}
    </>
  )
}

export default OrderDetails