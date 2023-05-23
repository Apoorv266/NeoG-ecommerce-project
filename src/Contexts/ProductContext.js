import React, { createContext, useEffect, useReducer, useState } from 'react'
import { GetAllProducts } from '../Fetch-services/FetchServices'
import { initialState, reducerFunc } from '../Reducers/Data'
import axios from 'axios'

export const productContext = createContext()
const ProductContextFunc = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  const [loader, setloader] = useState(true)


  const fetchFunc = async () => {
    try {

      const { data: products } = await axios.get("/api/products");
          dispatch({
            type: "INITIAL_PRODUCT",
            payload: products.products,
          });


          const { data : category } = await axios.get("/api/categories");
          console.log(category.categories)
          dispatch({
            type: "INITIAL_CATEGORY",
            payload: category.categories,
          });
    } catch (error) {
      console.group(error)
    }finally{
      setloader(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchFunc()
    }, 2000);
  }, [])
console.log(state)
  return (
    <productContext.Provider value={{ state,loader }}>{children}</productContext.Provider>
  )
}

export default ProductContextFunc