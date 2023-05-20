import React, { createContext, useEffect, useState } from 'react'
import { GetAllProducts } from '../Fetch-services/FetchServices'

export const productContext = createContext()
const ProductContextFunc = ({ children }) => {


  const fetchFunc = async () => {
    const response = await GetAllProducts()
    if (response.status === 200 || response.status === 201) {
      setproductList(response.data.products)
    }
  }
  useEffect(() => {
    fetchFunc()
  }, [])

  const [productList, setproductList] = useState([])
  return (
    <productContext.Provider value={{ productList }}>{children}</productContext.Provider>
  )
}

export default ProductContextFunc